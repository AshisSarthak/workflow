export const changeStatusAction = (item: any) => ({
  type: "CHANGE_STATUS",
  payload: item,
});

export const changeStatus = (item: any) => async (
  dispatch: any
): Promise<void> => {
  dispatch(changeStatusAction(item));
};
