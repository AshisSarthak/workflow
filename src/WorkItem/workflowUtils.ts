import { WorkFlowItems } from "./../workTypes";
import { STATUS } from "../workTypes";

export const updateNodeStatus = (item: WorkFlowItems) => {
  if (item.status === STATUS.PENDING) {
    item.status = STATUS.INPROGRESS;
  } else if (item.status === STATUS.INPROGRESS) {
    item.status = STATUS.COMPLETED;
  } else {
    item.status = STATUS.PENDING;
  }
};

export const shuffleArray = (array: any) => {
  array.sort((a: any, b: any) => {
    return 0.5 - Math.random();
  });
  return array;
};
