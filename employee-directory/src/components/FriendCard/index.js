import React from "react";
//import "./style.css";

function FriendCard(props) {
  return (
    <table className="table table-dark">
      <tbody>
        <tr>
          <td>{props.id}</td>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.department}</td>
          <td>{props.email}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default FriendCard;
