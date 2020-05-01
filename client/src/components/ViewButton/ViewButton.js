import React from "react";

function ViewButton(props) {
  return (
    <a className="view-btn btn btn-secondary" href={props.link} target="_blank" tabIndex="0" {...props} style={{ float: "right", marginRight: 10, color: "#ffffff" }}> <i className="fas fa-eye"></i>
    </a>
  );
}

export default ViewButton;
