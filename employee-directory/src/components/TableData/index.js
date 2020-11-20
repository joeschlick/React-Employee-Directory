import React from "react";
//import "./style.css";

function FriendCard(props) {
  return (
      <tbody>
        <tr>
          <th scope="row">{props.id}</th>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.department}</td>
          <td>{props.email}</td>
        </tr>
      </tbody>
  );
}

export default FriendCard;
