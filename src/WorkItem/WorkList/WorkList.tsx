import React from "react";
import { connect } from "react-redux";
import "./WorkList.css";
import { changeStatus } from "../WorkList/workListAction";

export type workListProps = {
  item: any;
  statusClass: string;
  changeStatus: any;
};

export class workList extends React.Component<workListProps> {
  componentDidMount() {}

  changeStatusHandler = () => {
    this.props.changeStatus(this.props.item);
  };

  render() {
    const { item, statusClass } = this.props;
    return (
      <div className="work-list">
        <div
          className={statusClass}
          title={item.status}
          onClick={this.changeStatusHandler}
        ></div>
        <input className="task-title" type="text" value={item.name} />
        <textarea className="content" value={item.content} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  changeStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(workList);
