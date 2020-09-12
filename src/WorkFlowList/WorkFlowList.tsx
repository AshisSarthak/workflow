import React from "react";
import { connect } from "react-redux";
import { WorkFlows } from "../workTypes";
import WFListHeader from "./WFListHeader/WFListHeader";
import WFList from "./WFListItem/WFListItem";
import "./WorkFlowList.css";

export type WorkFlowListProps = {
  workflows: Array<WorkFlows>;
  showWFItemScreen: boolean;
};

export class WorkFlowList extends React.Component<WorkFlowListProps> {
  render() {
    const { workflows, showWFItemScreen } = this.props;
    return !showWFItemScreen ? (
      <div className="work-flow-item">
        <WFListHeader />
        <section className="items">
          {workflows && workflows.map((item: any) => <WFList item={item} />)}
        </section>
      </div>
    ) : null;
  }
}

const mapStateToProps = (state: any) => ({
  workflows: state.items.filteredWorkflows,
  showWFItemScreen: state.items.showWFItemScreen,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(WorkFlowList);
