import logger from "app/utils/logger";
import { workerDB } from "app/database/database";
import Data from "app/data_clients/datainterfaces";
import SVMTrainer from "app/workers/aiWorker/SVMTrainer";
import NSAIWorker from "app/workers/aiWorker/aiWorkerTypes";

export async function validateModel(
  event: MessageEvent<NSAIWorker.Request.IStartValidate>
) {
  logger("Begin Model Validation");
  const labelVocab: Record<string, number> = {};
  let maxLabelId: number = 0;
  const trainingFormat: { samples: number[][]; labels: number[] } = {
    samples: [],
    labels: [],
  };

  const labeledTFIDFArray = (await workerDB.vector
    .where("hasLabel")
    .equals(1)
    .toArray()) as Required<Data.Vector>[];
  logger(`Fetched ${labeledTFIDFArray.length} labeled examples`);
  labeledTFIDFArray.forEach((tf) => {
    trainingFormat.samples.push(tf.vector);
    if (!labelVocab[tf.label]) {
      labelVocab[tf.label] = 1 + maxLabelId - 1;
      maxLabelId += 1;
    }
    let labelId = labelVocab[tf.label];
    trainingFormat.labels.push(labelId);
  });
  const inverseLabelVoab: Record<number, string> = {};
  for (const key in labelVocab) {
    const lid = labelVocab[key];
    inverseLabelVoab[lid] = key;
  }
  logger(`Loading Trainer`);
  const trainer = new SVMTrainer();
  await trainer.init();
  logger(`Trainer Initialized`);
  for await (let result of trainer.kFoldEvaluate(
    trainingFormat.samples,
    trainingFormat.labels,
    15,
    inverseLabelVoab
  )) {
    logger(`Finished a loop. Sending to db`);
    const adjusted = result.map((x) => ({
      ...x,
      label: x.label,
    }));
    console.log(adjusted);
    await workerDB.kfold.bulkAdd(adjusted.filter((x) => x.label !== undefined));
    logger(`Inserted starting next`);
  }
  logger(`Finished KFOLD Evaluation`);
}
