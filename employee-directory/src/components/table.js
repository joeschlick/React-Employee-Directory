function EmployeeTable(props) {
    const { employees } = props;
    return (
      <table>
        <caption>Employee Directory</caption>
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
          {employees.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }