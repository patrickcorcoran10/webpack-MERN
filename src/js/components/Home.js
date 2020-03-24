import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "../components/Form";

export default class Home extends Component {
  render() {
    return (
      <div>
        <p>hello friends</p>
        <Form />
      </div>
    );
  }
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
