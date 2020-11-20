import React from "react";
//import "./style.css";

function FriendCard(props) {
  return (
    <table className="table table-dark">
        <thead>
          <th>
            <strong>First Name:</strong> {props.firstName}
          </th>
          <th>
            <strong>Last Name:</strong> {props.lastName}
          </th>
          <th>
            <strong>Department:</strong> {props.department}
          </th>
          <th>
            <strong>Email:</strong> {props.email}
          </th>
        </thead>
    </table>
  );
}

export default FriendCard;
