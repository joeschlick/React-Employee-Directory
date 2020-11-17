import React, { Component } from "react";
import Table from "../Table";
import api from "../../util/api";

export default class Data extends Component {
  state = {
    users: [{}],
    filteredUsers: [{}],
    order: "descend",
  };

  handleSorting = (heading) => {
    if (this.state.order === "descend") {
      this.setState({ order: "ascend" });
    } else {
      this.setState({ order: "descend" });
    }
    const compareFnc = (a, b) => {
      if (this.state.order === "ascend") {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return a[heading] - b[heading];
        }
      } else {
        // account for missing values
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        }
        // numerically
        else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };
    const sortedUsers = this.state.filteredUsers.sort(compareFnc);
    this.setState({ filteredUsers: sortedUsers });
  };

  componentDidMount = () => {
    api.getUsers().then((data) => {
      this.setState({
        users: data.data.results,
        filteredUsers: data.data.results,
      });
    });
  };
}

export default Data;
