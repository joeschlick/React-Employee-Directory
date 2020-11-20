import React from "react";

function TableHeader(props) {
  return (
      <thead>
        <th scope="col">
          <strong>ID#:</strong>
        </th>
        <th scope="col">
          <strong>First Name:</strong>
        </th>
        <th scope="col">
          <strong>Last Name:</strong>
        </th>
        <th scope="col">
          <strong>Department:</strong>
        </th>
        <th scope="col">
          <strong>Email:</strong>
        </th>
      </thead>
  );
}

export default TableHeader;
