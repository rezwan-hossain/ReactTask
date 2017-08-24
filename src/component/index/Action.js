import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import RaisedButton from "material-ui/RaisedButton";

class Action extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <section className="header">
        <Container>
            <div>
              <h1 className="title">{this.props.title}</h1>
            </div>
            <h3>Add quote </h3>
            <RaisedButton label="Button" primary={true} />
        </Container>
      </section>
    );
  }
}

export default Action;
