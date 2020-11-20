import React from "react";

function TableHeader(props) {
  return (
    <table className="table table-dark">
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
    </table>
  );
}

export default TableHeader;
