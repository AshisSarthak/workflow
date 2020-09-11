import { STATUS } from "../workTypes";

export const defaultItems = [
  {
    id: "1",
    name: "demo1",
    content: "I am a task",
    status: STATUS.PENDING,
  },
  {
    id: "2",
    name: "demo2",
    content: "I am a task",
    status: STATUS.PENDING,
  },
];

const defaultState = {
  currentWorkFlow: {
    id: 1,
    name: "WorkFlow 1",
    items: [
      {
        id: "1",
        name: "demo1",
        content: "I am a task",
        status: STATUS.PENDING,
      },
      {
        id: "2",
        name: "demo2",
        content: "I am a task",
        status: STATUS.PENDING,
      },
    ],
  },
  items: defaultItems,
};

const itemReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      const item = action.payload;
      if (item.status === STATUS.PENDING) {
        item.status = STATUS.INPROGRESS;
      } else if (item.status === STATUS.INPROGRESS) {
        item.status = STATUS.COMPLETED;
      } else {
        item.status = STATUS.PENDING;
      }
      const oldWorkFlow = { ...state.currentWorkFlow };
      Object.assign([...oldWorkFlow.items], item);
      return {
        ...state,
        currentWorkFlow: {
          ...oldWorkFlow,
        },
      };
    default:
      return state;
  }
};

export default itemReducer;
