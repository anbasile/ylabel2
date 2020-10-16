import Dexie from "dexie";
import "dexie-observable";
import Data from "app/data_clients/datainterfaces";
import { DatabaseChangeType, IDatabaseChange } from "dexie-observable/api";

type TDBChangeCallback = (changeEvent: IDatabaseChange) => void;
export type TableNames = "example" | "label" | "indexCache" | "vector";
export class OurDatabase extends Dexie {
  example: Dexie.Table<Data.Example, string>;
  label: Dexie.Table<Data.Label, string>;
  indexCache: Dexie.Table<Data.SerializedIndex, string>; // stores the search index
  vector: Dexie.Table<Data.Vector, string>;
  changeCallbacks: Record<TableNames, TDBChangeCallback[]>;
  public addTableEventListener(
    tableName: TableNames,
    callback: TDBChangeCallback
  ) {
    this.changeCallbacks[tableName].push(callback);
  }
  public removeTableEventListener(
    tableName: TableNames,
    callback: TDBChangeCallback
  ) {
    this.changeCallbacks[tableName] = this.changeCallbacks[tableName].filter(
      (x) => x != callback
    );
  }
  constructor() {
    super("OurDatabase");
    this.version(1).stores({
      example: "exampleId,datasetName,label,hasLabel",
      label: "name",
      indexCache: "name",
      vector: "exampleId,label,hasLabel",
    });
    this.example = this.table("example");
    this.label = this.table("label");
    this.indexCache = this.table("indexCache");
    this.vector = this.table("vector");
    this.changeCallbacks = {
      example: [],
      label: [],
      indexCache: [],
      vector: [],
    };
  }
}

function gatherLabelChangeCount(
  change: IDatabaseChange,
  labelChangeAccumulator: Record<string, number>
) {
  if (change.table === "example" && change.type === DatabaseChangeType.Update) {
    const oldLabel = (change.oldObj as Data.Example).label;
    const newLabel = (change.obj as Data.Example).label;
    console.log(oldLabel, newLabel);
    if (newLabel === oldLabel) {
      //do nothing
    } else {
      if (oldLabel !== undefined) {
        labelChangeAccumulator[oldLabel] =
          labelChangeAccumulator[oldLabel] - 1 || -1;
      }
      if (newLabel !== undefined) {
        labelChangeAccumulator[newLabel] =
          labelChangeAccumulator[newLabel] + 1 || +1;
      }
    }
  }
}

async function updateLabelCount(labelName: string, difference: number) {
  const label = await mainThreadDB.label
    .where("name")
    .equals(labelName)
    .first();
  if (label) {
    const newCount = label.count + difference;
    return mainThreadDB.label.update(labelName, { count: newCount });
  } else {
    return Promise.reject(`Couldn't find label ${labelName} in db`);
  }
}

function initatiateMainThreadDB() {
  const mainThreadDB = new OurDatabase();
  mainThreadDB.on("changes", (changes) => {
    const labelChangeAccumulator: Record<string, number> = {};
    console.log(changes);
    console.log(mainThreadDB.changeCallbacks.label.length);
    console.log(mainThreadDB.changeCallbacks.example.length);
    changes.forEach((change) => {
      gatherLabelChangeCount(change, labelChangeAccumulator);
      const callbacks =
        mainThreadDB.changeCallbacks[change.table as TableNames];
      callbacks.forEach((callback) => callback(change));
    });
    Promise.all(
      Object.entries(labelChangeAccumulator).map(([name, dif]) =>
        updateLabelCount(name, dif)
      )
    );
  });
  return mainThreadDB;
}
const mainThreadDB = initatiateMainThreadDB();

const initiateWorkerDB = () => {
  const workerDB = new OurDatabase();
  return workerDB;
};
const workerDB = initiateWorkerDB();

export { mainThreadDB, workerDB };
