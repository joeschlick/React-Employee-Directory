import React from "react";

function Table(props) {
    const { employees } = props;
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>State</th>
            <th>Email</th>
            <th>Mobile #</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.login.uuid}>
              <td>{employee.name.first}</td>
              <td>{employee.name.last}</td>
              <td>{employee.location.state}</td>
              <td>{employee.email}</td>
              <td>{employee.cell}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  export default Table;