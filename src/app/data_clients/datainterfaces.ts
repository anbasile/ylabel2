declare namespace Data {
  type resource =
    | "dataset"
    | "tagset"
    | "labelset"
    | "tag"
    | "label"
    | "example"
    | "rejectedLabel";

  type LabelState = {
    label?: string;
    hasLabel: 1 | -1;
    rejectedLabels: string[];
    hasNegativeOrRejectedLabel: 1 | -1;
  };

  interface Base {
    kind: resource;
  }
  interface SerializedIndex {
    name: string;
    data: Uint8Array;
  }
  interface Dataset extends Base {
    name: string;
    kind: "dataset";
  }

  interface TagSet extends Base {
    name: string;
    colorize?: () => void;
    kind: "tagset";
  }
  interface LabelSet extends Base {
    name: string;
    colorize?: () => void;
    kind: "labelset";
  }
  interface Example extends Base, LabelState {
    exampleId: string;
    content: string;
    metadata?: any;
    datasetName?: string;
    kind: "example";
    predictedLabel?: string;
    hasPrediction?: boolean;
    confidence?: number;
  }
  interface Tag extends Base {
    name: string;
    kind: "tag";
  }
  interface Label extends Base {
    name: string;
    kind: "label";
    count: number;
  }
  interface Vector extends LabelState {
    exampleId: string;
    vector: number[];
  }
  type TFIDF = {
    dict: Record<string, number>;
    arr: Array<number>;
    exampleId: string;
  } & LabelState;
}
export namespace AnalyticsData {
  export interface PrecisionRecallKfoldMetric {
    truePositive: number;
    falsePositive: number;
    falseNegative: number;
    precision: number | null;
    recall: number;
    f1: number;
    timestamp: Date;
    kNumber: number;
    label: string;
    size: number;
  }
  export interface LabelValidationRun {
    label: string;
    mean: number; // Mean F1
    lower: number; // lower bound of confidence interval
    upper: number; // upper bound of confidence interval
  }
  export type ValidationRunResult = Record<string, LabelValidationRun[]>;
}
export default Data;
