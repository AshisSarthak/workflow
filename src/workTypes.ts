export enum STATUS {
  PENDING = "pending",
  INPROGRESS = "inprogress",
  COMPLETED = "completed",
}

export type WorkFlowItems = {
  id: string;
  name: string;
  content: string;
  status: STATUS;
};

export type WorkFlows = {
  id: number;
  name: string;
  items: Array<WorkFlowItems>;
  status: string;
};

export type SearchFilter = {
  keyword: string;
  status: string;
};
