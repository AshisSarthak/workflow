import React from "react";
import { connect } from "react-redux";
import { STATUS, WorkFlowItems, WorkFlows } from "../../workTypes";
import {
  setCurrentWF,
  deleteWorkFlow,
  updateStatus,
} from "../WorkFlowListAction";
import "./WFListItem.css";

export type WFListProps = {
  item: WorkFlows;
  setCurrentWF: Function;
  deleteWorkFlow: Function;
  updateStatus: Function;
};

export type WFListState = {
  showDeleteIcon: boolean;
};

export class WFList extends React.Component<WFListProps, WFListState> {
  state: WFListState = {
    showDeleteIcon: false,
  };

  showDelIcon = () => {
    this.setState({
      showDeleteIcon: true,
    });
  };

  hideDelIcon = () => {
    this.setState({
      showDeleteIcon: false,
    });
  };

  handleWorkListClick = () => {
    this.props.setCurrentWF(this.props.item);
  };

  deleteWorkFlowHandler = (event: any) => {
    event.stopPropagation();
    this.props.deleteWorkFlow(this.props.item.id);
  };

  getStausClass = () => {
    if (this.props.item.status === STATUS.COMPLETED) {
      return "completed wf-item-status";
    }
    return "wf-item-status";
  };

  changeStatusHandler = (event: any) => {
    event.stopPropagation();
    const { item } = this.props;
    if (item.status === STATUS.COMPLETED) {
      this.props.updateStatus(this.props.item.id, STATUS.PENDING);
    } else {
      const { items } = this.props.item;
      const hasPendingNodes = items.find(
        (itemVal: WorkFlowItems) => itemVal.status !== STATUS.COMPLETED
      );
      if (!hasPendingNodes) {
        this.props.updateStatus(this.props.item.id, STATUS.COMPLETED);
      }
    }
  };

  render() {
    const { item } = this.props;
    return (
      <div
        onMouseEnter={this.showDelIcon}
        onMouseLeave={this.hideDelIcon}
        className="work-list"
      >
        {this.state.showDeleteIcon && (
          <div
            className="status-flow"
            onClick={this.deleteWorkFlowHandler}
            title={item.status}
          >
            X
          </div>
        )}
        <input className="flow-title" type="text" value={item.name} />
        <section className="wf-status">
          {item.status}
          <div
            className={this.getStausClass()}
            title={item.status}
            onClick={this.changeStatusHandler}
          ></div>
        </section>
        <section className="wf-details" onClick={this.handleWorkListClick}>
          See WorkFlow Details
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  setCurrentWF,
  deleteWorkFlow,
  updateStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(WFList);
