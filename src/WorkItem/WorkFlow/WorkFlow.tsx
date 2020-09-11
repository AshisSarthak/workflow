import React from "react";
import { connect } from "react-redux";
import "./WorkFlow.css";

export type workListProps = {
  currentWorkFlow: any;
};

export class workFlow extends React.Component<workListProps> {
  componentDidMount() {}

  render() {
    const { currentWorkFlow } = this.props;
    return (
      <div className="workflow-header">
        <input
          className="workflow-title"
          type="text"
          value={currentWorkFlow.name}
        />
        <section className="workflow-buttons">
          <button className="shuffle-button">Shuffle</button>
          <button className="delete-button">Delete</button>
          <button className="add-button">Add Node</button>
          <button className="save-button">Save</button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(workFlow);
