import React, { Component } from "react";

import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";

import { Container, Row, Col } from "react-grid-system";

import AddTask from "./AddTask.js";

import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
    console;
  }

  removeButton(e) {
    let value = e.target.parentNode.querySelector("span").innerText;
    console.log(value);
    this.props.remove(value);
  }



  editOption() {
    if (this.state.isEditing) {
      console.log("editing");
      return <AddTask />;
    }
  }

  render() {
    var item = this.props.item.map((element, i) => {
      return (
        <Row>
          <Col md={4} offset={{ md: 4 }}>
            <div className="list-div" >
              <Paper zDepth={3}>
                <li key={i}>
                  <span>{element}</span>{" "}
                  <button
                    className="btn"
                    onClick={this.removeButton.bind(this)}
                  >
                    X
                  </button>
                </li>
              </Paper>
            </div>
          </Col>
        </Row>
      );
    });
    return (
      <div>
      
        {item}
      </div>
    );
  }
}

export default TodoList;
