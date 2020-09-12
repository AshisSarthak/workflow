import React from "react";
import { connect } from "react-redux";
import { SearchFilter } from "../../workTypes";
import { createWorkFlow } from "../WorkFlowListAction";
import "./WFListHeader.css";
import {
  changeSearchInput,
  changeSearchStatus,
  resetSearch,
} from "../WorkFlowListAction";

export type WFListHeaderProps = {
  search: SearchFilter;
  changeSearchInput: Function;
  changeSearchStatus: Function;
  createWorkFlow: Function;
  resetSearch: Function;
};

const options = ["All", "Completed", "Pending"];

export class WFListHeader extends React.Component<WFListHeaderProps> {
  createWFHandler = () => {
    this.props.createWorkFlow();
    this.props.resetSearch();
  };

  handleKeywordChange = (event: any) => {
    this.props.changeSearchInput(event.target.value);
  };

  handleStatusChange = (event: any) => {
    this.props.changeSearchStatus(event.target.value);
  };

  render() {
    const { keyword, status } = this.props.search || {
      keyword: "",
      status: "",
    };
    return (
      <div className="wflist-header">
        <section className="wflist-filter">
          <input
            className="wflist-title"
            type="text"
            value={keyword}
            onChange={this.handleKeywordChange}
          />
          <select onChange={this.handleStatusChange} value={status}>
            {options.map((val) => (
              <option value={val}>{val}</option>
            ))}
          </select>
        </section>
        <button className="createwf-button" onClick={this.createWFHandler}>
          + Create Work Flow
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  search: state.items.searchFilter,
});

const mapDispatchToProps = {
  createWorkFlow,
  changeSearchInput,
  changeSearchStatus,
  resetSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(WFListHeader);
