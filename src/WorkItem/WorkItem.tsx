import React from "react";
import { connect } from "react-redux";
import WorkList from "./WorkList/WorkList";
import "./WorkItem.css";
import { STATUS } from "../workTypes";
import WorkFlow from "./WorkFlow/WorkFlow";

export type WorkItemProps = {
  currentWorkFlow: any;
};

export class workItem extends React.Component<WorkItemProps> {
  componentDidMount() {}

  getClassname = (item: any) => {
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
    const { currentWorkFlow } = this.props;
    const items = currentWorkFlow.items;
    return (
      <div className="workItem">
        <header className="header-item">
          <WorkFlow currentWorkFlow={currentWorkFlow} />
        </header>
        <section className="items">
          {items &&
            items.map((item: any) => (
              <WorkList item={item} statusClass={this.getClassname(item)} />
            ))}
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  currentWorkFlow: state.items.currentWorkFlow,
});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(workItem);
