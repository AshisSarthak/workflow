import { STATUS, WorkFlows } from "../workTypes";

export const setWorkFlowAction = (item: WorkFlows) => ({
  type: "SET_CURRENT_WORKFLOW",
  payload: item,
});

export const setCurrentWF = (item: WorkFlows) => async (
  dispatch: any
): Promise<void> => {
  dispatch(setWorkFlowAction(item));
};

export const createWorkFlowAction = () => ({
  type: "CREATE_WORKFLOW",
});

export const createWorkFlow = () => async (dispatch: any): Promise<void> => {
  dispatch(createWorkFlowAction());
};

export const deleteWorkFlowAction = (id: number) => ({
  type: "DELETE_WORKFLOW",
  payload: id,
});

export const deleteWorkFlow = (id: number) => async (
  dispatch: any
): Promise<void> => {
  dispatch(deleteWorkFlowAction(id));
};

export const updateStatusAction = (id: number, status: STATUS) => ({
  type:
    status === STATUS.COMPLETED
      ? "UPDATE_WORKFLOW_COMPLETE"
      : "UPDATE_WORKFLOW_PENDING",
  payload: id,
});

export const updateStatus = (id: number, status: STATUS) => async (
  dispatch: any
): Promise<void> => {
  dispatch(updateStatusAction(id, status));
};

export const changeWFNameAction = (id: number, name: string) => ({
  type: "UPDATE_WORKFLOW_NAME",
  payload: {
    id,
    name,
  },
});

export const changeWFName = (id: number, name: string) => async (
  dispatch: any
): Promise<void> => {
  dispatch(changeWFNameAction(id, name));
};

export const changeSearchInputAction = (name: string) => ({
  type: "UPDATE_SEARCH_KEYWORD",
  payload: name,
});

export const setFilteredWorkFlows = (wfs: Array<WorkFlows>) => ({
  type: "SET_FILTERED_WORKFLOWS",
  payload: wfs,
});

export const changeSearchInput = (name: string) => async (
  dispatch: any,
  getState: any
): Promise<void> => {
  dispatch(changeSearchInputAction(name));
  const { workflows } = getState().items;
  const newWFS = workflows.filter((wf: WorkFlows) => wf.name.includes(name));
  dispatch(setFilteredWorkFlows(newWFS));
};

export const changeSearchStatusAction = (name: string) => ({
  type: "UPDATE_SEARCH_STATUS",
  payload: name,
});

export const changeSearchStatus = (name: string) => async (
  dispatch: any,
  getState: any
): Promise<void> => {
  dispatch(changeSearchStatusAction(name));
  const { workflows } = getState().items;
  const newWFS =
    name === "All"
      ? workflows
      : workflows.filter(
          (wf: WorkFlows) => wf.status.toLowerCase() === name.toLowerCase()
        );
  dispatch(setFilteredWorkFlows(newWFS));
};

export const resetSearchAction = () => ({
  type: "RESET_SEARCH",
});

export const resetSearch = () => async (dispatch: any): Promise<void> => {
  dispatch(resetSearchAction());
};
