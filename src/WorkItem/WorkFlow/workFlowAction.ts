export const addNodeAction = () => ({
  type: "ADD_NODE",
});

export const addNode = () => async (dispatch: any): Promise<void> => {
  dispatch(addNodeAction());
};

export const deleteNodeAction = () => ({
  type: "DELETE_NODE",
});

export const deleteNode = () => async (dispatch: any): Promise<void> => {
  dispatch(deleteNodeAction());
};

export const shuffleNodeAction = () => ({
  type: "SHUFFLE_NODE",
});

export const shuffleNode = () => async (dispatch: any): Promise<void> => {
  dispatch(shuffleNodeAction());
};

export const updateWorkFlowNameAction = (name: string, id: number) => ({
  type: "UPDATE_CURRENT_WORKFLOW_NAME",
  payload: {
    id,
    name,
  },
});

export const updateWorkFlowName = (name: string, id: number) => async (
  dispatch: any
): Promise<void> => {
  dispatch(updateWorkFlowNameAction(name, id));
};

export const hideWFScreenAction = () => ({
  type: "HIDE_WF_SCREEN",
});

export const hideWFScreen = () => async (dispatch: any): Promise<void> => {
  dispatch(hideWFScreenAction());
};

