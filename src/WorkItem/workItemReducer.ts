import { SearchFilter, STATUS, WorkFlowItems, WorkFlows } from "../workTypes";
import { shuffleArray, updateNodeStatus } from "./workflowUtils";

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

export const defaultState = {
  workflows: [
    {
      id: 1,
      name: "WorkFlow 1",
      status: STATUS.PENDING,
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
    {
      id: 2,
      name: "WorkFlow 2",
      status: STATUS.PENDING,
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
  ],
  filteredWorkflows: [
    {
      id: 1,
      name: "WorkFlow 1",
      status: STATUS.PENDING,
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
    {
      id: 2,
      name: "WorkFlow 2",
      status: STATUS.PENDING,
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
  ],
  currentWorkFlow: undefined,
  showWFItemScreen: false,
  searchFilter: {
    keyword: "",
    status: "",
  },
};

export type RootState = {
  workflows: Array<WorkFlows>;
  filteredWorkflows: Array<WorkFlows>;
  currentWorkFlow: WorkFlows | undefined;
  showWFItemScreen: boolean;
  searchFilter: SearchFilter;
};

const itemReducer = (state: RootState = defaultState, action: any) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      const item = action.payload;
      updateNodeStatus(item);
      const oldWorkFlow: WorkFlows = { ...state.currentWorkFlow! };
      Object.assign([...oldWorkFlow.items], item);
      return {
        ...state,
        currentWorkFlow: {
          ...oldWorkFlow,
        },
      };
    case "ADD_NODE":
      const newNode: WorkFlowItems = {
        id: `${state.currentWorkFlow!.items.length + 1}`,
        name: "Default Name",
        content: "Default Content",
        status: STATUS.PENDING,
      };
      let oldState: WorkFlows = { ...state.currentWorkFlow! };
      oldState.items.push(newNode);
      return {
        ...state,
        currentWorkFlow: {
          ...oldState,
        },
      };

    case "DELETE_NODE":
      const oldState1: WorkFlows = { ...state.currentWorkFlow! };
      oldState1.items.pop();
      return {
        ...state,
        currentWorkFlow: {
          ...state.currentWorkFlow,
        },
      };

    case "SHUFFLE_NODE":
      return {
        ...state,
        currentWorkFlow: {
          ...state.currentWorkFlow,
          items: shuffleArray(state.currentWorkFlow!.items),
        },
      };
    case "UPDATE_CURRENT_WORKFLOW_NAME":
      const { id, name } = action.payload;
      const newWF = [...state.workflows];
      const targetWF2 = newWF.find((wf: WorkFlows) => wf.id === id);
      targetWF2!.name = name;
      return {
        ...state,
        currentWorkFlow: {
          ...state.currentWorkFlow,
          name: name,
        },
        workFlows: [...state.workflows, newWF],
      };
    case "SET_CURRENT_WORKFLOW":
      return {
        ...state,
        currentWorkFlow: {
          ...action.payload,
        },
        showWFItemScreen: true,
      };
    case "HIDE_WF_SCREEN":
      return {
        ...state,
        showWFItemScreen: false,
      };
    case "CREATE_WORKFLOW":
      const newItem = {
        id: `${state.workflows.length + 1}`,
        name: "Default WorkFlow Name",
        items: [],
        status: STATUS.PENDING,
      };
      return {
        ...state,
        workflows: [...state.workflows, newItem],
        filteredWorkflows: [...state.workflows, newItem],
      };
    case "DELETE_WORKFLOW":
      const newWorkFlows = state.workflows.filter(
        (wf: WorkFlows) => wf.id !== action.payload
      );
      return {
        ...state,
        workflows: [...newWorkFlows],
        filteredWorkflows: [...newWorkFlows],
      };

    case "UPDATE_WORKFLOW_COMPLETE":
      const targetWF = state.workflows.find(
        (wf: WorkFlows) => wf.id === action.payload
      );
      targetWF!.status = STATUS.COMPLETED;
      return {
        ...state,
        workflows: Object.assign([...state.workflows], targetWF),
      };

    case "UPDATE_WORKFLOW_PENDING":
      const targetWF1 = state.workflows.find(
        (wf: WorkFlows) => wf.id === action.payload
      );
      targetWF1!.status = STATUS.PENDING;
      targetWF1!.items.forEach(
        (val: WorkFlowItems) => (val.status = STATUS.PENDING)
      );
      return {
        ...state,
        workflows: Object.assign([...state.workflows], targetWF1),
      };
    case "SET_FILTERED_WORKFLOWS":
      return {
        ...state,
        filteredWorkflows: action.payload,
      };
    case "UPDATE_SEARCH_KEYWORD":
      return {
        ...state,
        searchFilter: {
          ...state.searchFilter,
          keyword: action.payload,
        },
      };
    case "UPDATE_SEARCH_STATUS":
      return {
        ...state,
        searchFilter: {
          ...state.searchFilter,
          status: action.payload,
        },
      };

    case "RESET_SEARCH":
      return {
        ...state,
        searchFilter: {
          keyword: "",
          status: "",
        },
      };
    default:
      return state;
  }
};

export default itemReducer;
