import React from "react";

function TableHeader(props) {
  function handleSort(param) {
    props.handleSort(param)
  }
  return (
      <thead>
        <th 
          scope="col"
          onClick= {() => {
            handleSort("id")
          }}
        >
          <strong>ID#:</strong>
        </th>
        <th scope="col"
        onClick= {() => {
          handleSort("firstName")
        }}
        >
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
