import React, { FunctionComponent } from "react";
import { TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
import useDatabase from "app/database/useDatabase";
import { useMutation } from "react-query";
import { mainThreadDB } from "app/database/database";
import Data from "app/data_clients/datainterfaces";
import useSearchQuery from "app/QueryContext/useSearchQuery";
import LabelRow from "app/components/labelControls/LabelRow";
const AddLabel: FunctionComponent = () => {
  const [name, setName] = React.useState<string | undefined>();
  const addLabel = useMutation((name: string) =>
    mainThreadDB.label.add({ name, kind: "label", count: 0 }, name)
  );
  return (
    <div>
      <TextField
        label={"Add a new label"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <IconButton
        size={"small"}
        disabled={name === undefined}
        onClick={() => name && addLabel.mutate(name)}
      >
        <SaveIcon fontSize={"small"} />
      </IconButton>
    </div>
  );
};
export function useAnnotateAll() {
  const exampleIds = useSearchQuery();
  return useMutation((label: string | null) =>
    mainThreadDB.transaction(
      "rw",
      [mainThreadDB.example, mainThreadDB.tfidf, mainThreadDB.vector],
      async () => {
        //TODO -- get the rejected labels back into the update
        const labelState: Data.LabelState = {
          label: label || undefined,
          hasLabel: label !== null ? 1 : -1,
        };
        await Promise.all(
          (exampleIds.data || []).map(async (exampleId) => {
            Promise.all([
              mainThreadDB.example.update(exampleId, labelState),
              mainThreadDB.tfidf.update(exampleId, labelState),
              mainThreadDB.vector.update(exampleId, labelState),
            ]);
          })
        );
      }
    )
  );
}

const LabelControls: FunctionComponent = (props) => {
  const labels = useDatabase(
    "labelStats",
    "label",
    (db) => db.label.toArray(),
    undefined
  );

  if (!labels.data) {
    return <div>loading</div>;
  }
  return (
    <div>
      <AddLabel />

      {labels.data.map((label, count) => (
        <LabelRow
          selected={false}
          count={label.count}
          labelName={label.name}
          key={label.name}
        />
      ))}
    </div>
  );
};

export default LabelControls;
