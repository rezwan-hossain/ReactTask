import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

class SectionA extends Component {
  render() {
    
    return (
      <section className="section-a">
        <Container>
          <Row>
            <Col lg={6}>
              <div>
                <h2 className="heading">analyzes popular articles</h2>
              </div>
              <hr className="divider" />

              <div>
                <p className="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris tincidunt urna quis neque feugiat mollis. Etiam
                  fermentum quis mi vel facilisis. Donec in ornare massa.
                </p>
              </div>
            </Col>

            <Col lg={6}>
              <img className="laptop laptop-img" src="../image/Laptop.svg" />
            </Col>
          </Row>
        </Container>
    
  
      </section>
    );
  }
}

export default SectionA;
