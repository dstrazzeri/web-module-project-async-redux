import React from "react";
import { connect } from "react-redux";


const ActivityList = (props) => {
 
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div>
    <div className="activity-list">
      <h2>You should:</h2>
      <div>
      <h3>{props.activity}</h3>
      </div>
    </div>
    <div>
    <button onClick={refreshPage}>Still Bored?</button>
     </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    activity: state.activity,
  };
};

export default connect(mapStateToProps)(ActivityList);
