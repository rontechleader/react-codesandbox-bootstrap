import React from "react";
import "./styles.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox 4</h1>
      <hr />
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <Button variant="primary">Primary</Button>{" "}
      <Button variant="secondary">Secondary</Button>{" "}
      <Button variant="success">Success</Button>{" "}
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button> <Button variant="link">Link</Button>
      <hr />
      <Button variant="outline-primary">Primary Alt</Button>{" "}
      <Button variant="outline-secondary">Secondary Alt</Button>{" "}
      <Button variant="outline-success">Success Alt</Button>{" "}
      <Button variant="outline-warning">Warning Alt</Button>{" "}
      <Button variant="outline-danger">Danger Alt</Button>{" "}
      <Button variant="outline-info">Info Alt</Button>{" "}
      <Button variant="outline-light">Light Alt</Button>{" "}
      <Button variant="outline-dark">Dark Alt</Button>
      <hr />
      <>
        <Button href="#">Link</Button> <Button type="submit">Button</Button>{" "}
        <Button as="input" type="button" value="Input" />{" "}
        <Button as="input" type="submit" value="Submit" />{" "}
        <Button as="input" type="reset" value="Reset" />
      </>
      <hr />
      <Container>
        <Row variant="primary">
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className="Row">
          <Col xs>First, but unordered</Col>
          <Col xs={{ order: 12 }}>Second, but last</Col>
          <Col xs={{ order: 1 }}>Third, but second</Col>
        </Row>
      </Container>
      <hr />
    </div>
  );
}
