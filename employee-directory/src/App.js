import React, { Component } from "react";
import TableBody from "./components/TableBody";
import TableData from "./components/TableData";
import TableHeader from "./components/TableHeader";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    sortingOrder: "descend",
    initialData: employees,
    filterData: employees.reverse()

  };

  changeOrder = (param) => {
    if (this.state.sortingOrder === "descend") {
      this.setState({
        sortingOrder: "ascend"
      })
      const sortedArray = this.state.filterData.sort((a, b) => {if (a[param]>b[param]) {return 1} else if (b[param]>a[param]) {return -1} else {return 0}})
      this.setState({filterData: sortedArray})
    } else {
      this.setState({
        sortingOrder: "descend"
    })
    const sortedArray = this.state.filterData.sort((a, b) => {if (a[param]<b[param]) {return 1} else if (b[param]<a[param]) {return -1} else {return 0}})
      this.setState({filterData: sortedArray})
    }
  }

  // revers the array 
  // Map over this.state.employees and render a FriendCard component for each friend object
  render() {

    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        <TableBody>
          <TableHeader handleSort={this.changeOrder} ></TableHeader>
            {this.state.filterData.map((friend) => (
              <TableData
                id={friend.id}
                key={friend.id}
                firstName={friend.firstName}
                lastName={friend.lastName}
                department={friend.department}
                email={friend.email}
              />
              
            ))}

        </TableBody>
      </Wrapper>
    );
  }
}

export default App;
