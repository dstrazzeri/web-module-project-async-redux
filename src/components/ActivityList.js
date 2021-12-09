import React from "react";
import { connect } from "react-redux";

const ActivityList = (props) => {
  console.log(props);
  return (
    <div className="activity-list">
      <h2>You should:</h2>
      <h3>{props.activity}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
  };
};

export default connect(mapStateToProps)(ActivityList);
