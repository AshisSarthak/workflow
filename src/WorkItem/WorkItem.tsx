import React from "react";
import { connect } from "react-redux";
import WorkList from "./WorkList/WorkList";
import "./WorkItem.css";
import { STATUS, WorkFlowItems, WorkFlows } from "../workTypes";
import WorkFlow from "./WorkFlow/WorkFlow";

export type WorkItemProps = {
  currentWorkFlow: WorkFlows;
  showWFItemScreen: boolean;
};

export class workItem extends React.Component<WorkItemProps> {
  componentDidMount() {}

  getClassname = (item: WorkFlowItems) => {
    switch (item.status) {
      case STATUS.INPROGRESS:
        return "status progress";
      case STATUS.COMPLETED:
        return "status completed";
      default:
        return "status";
    }
  };

  render() {
    const { currentWorkFlow, showWFItemScreen } = this.props;
    const items = currentWorkFlow && currentWorkFlow.items;
    return showWFItemScreen ? (
      <div className="workItem">
        <header className="header-item">
          <WorkFlow currentWorkFlow={currentWorkFlow} />
        </header>
        <section className="items">
          {items &&
            items.map((item: WorkFlowItems) => (
              <WorkList item={item} statusClass={this.getClassname(item)} />
            ))}
        </section>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state: any) => ({
  currentWorkFlow: state.items.currentWorkFlow,
  showWFItemScreen: state.items.showWFItemScreen,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(workItem);
