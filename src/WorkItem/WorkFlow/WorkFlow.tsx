import React from "react";
import { connect } from "react-redux";
import { WorkFlows } from "../../workTypes";
import "./WorkFlow.css";
import {
  addNode,
  deleteNode,
  shuffleNode,
  updateWorkFlowName,
  hideWFScreen,
} from "./workFlowAction";

export type workListProps = {
  currentWorkFlow: WorkFlows;
  addNode: Function;
  deleteNode: Function;
  shuffleNode: Function;
  saveWorkFlowName: Function;
  hideWFScreen: Function;
};

export class workFlow extends React.Component<workListProps> {
  componentDidMount() {}

  addNodehandler = () => {
    this.props.addNode();
  };

  deleteNodehandler = () => {
    this.props.deleteNode();
  };

  shuffleNodehandler = () => {
    this.props.shuffleNode();
  };

  workFlowNameChangeHandler = (event: any) => {
    if (event.target.value) {
      this.props.saveWorkFlowName(
        event.target.value,
        this.props.currentWorkFlow.id
      );
    }
  };

  hideWFScreen = () => {
    this.props.hideWFScreen();
  };

  render() {
    const { currentWorkFlow } = this.props;
    return (
      <div className="workflow-header">
        <input
          className="workflow-title"
          type="text"
          value={currentWorkFlow.name}
          onChange={this.workFlowNameChangeHandler}
        />
        <section className="workflow-buttons">
          <button className="shuffle-button" onClick={this.shuffleNodehandler}>
            Shuffle
          </button>
          <button className="delete-button" onClick={this.deleteNodehandler}>
            Delete
          </button>
          <button className="add-button" onClick={this.addNodehandler}>
            Add Node
          </button>
          <button className="back-button" onClick={this.hideWFScreen}>
            back
          </button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  addNode,
  deleteNode,
  shuffleNode,
  hideWFScreen,
  saveWorkFlowName: updateWorkFlowName,
};

export default connect(mapStateToProps, mapDispatchToProps)(workFlow);
