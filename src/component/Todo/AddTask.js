import React, { Component } from "react";
import "./AddTask.css";

import { Container, Row, Col } from "react-grid-system";

class AddTask extends Component {
  submit(e) {
    e.preventDefault();
    const input = e.target.querySelector("input");
    const value = input.value.trim();
    input.value = "";
    this.props.updateList(value);
  }

  render() {
    return (
      <Row>
        <Col md={4} offset={{ md: 4 }} >
          <form className="newForm" onSubmit={this.submit.bind(this)}>
            <input type="text" className="inputStyle"/>
          </form>
        </Col>
      </Row>
    );
  }
}

export default AddTask;
