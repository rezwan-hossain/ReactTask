import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";


class SectionB extends Component {
  render() {
    return (
      <div>
        <Col lg={6}>content</Col>

        <Col lg={6}>
          <div>
            <h2 className="heading">analyzes popular articles</h2>
          </div>
          <hr className="divider" />

          <div>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tincidunt urna quis neque feugiat mollis. Etiam fermentum quis mi
              vel facilisis. Donec in ornare massa.
            </p>
          </div>
        </Col>
      </div>
    );
  }
}

export default SectionB;
