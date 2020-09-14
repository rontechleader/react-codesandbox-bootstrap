import React from "react";
import "./styles.css";
import {
  DropdownButton,
  Dropdown,
  Card,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "holderjs";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Contentstack ver. 11</h1>
      <hr />
      <h2>Start editing to see some magic happen!</h2>
      <hr />
      <DropdownButton
        id="dropdown-basic-button"
        variant="secondary"
        title="Action"
      >
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </DropdownButton>
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
          <Col className="Sehaj" xs={{ order: 12 }}>
            Second, but last
          </Col>
          <Col className="Ron" xs={{ order: 1 }}>
            Third, but second
          </Col>
        </Row>
      </Container>
      <hr />
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="bottom" src="holder.js/100px100" />
        <Card.Body>
          <Card.Title className="Libby">Card Title</Card.Title>
          <Card.Text className="Card">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
