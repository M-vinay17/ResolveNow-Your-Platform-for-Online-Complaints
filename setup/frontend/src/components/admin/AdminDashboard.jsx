import React from "react";
import { Navbar, Nav, Container, Card, Button } from "react-bootstrap";
import FooterC from "../common/FooterC";

const AdminDashboard = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Hi Admin shadeel</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/admindashboard">Dashboard</Nav.Link>
            <Nav.Link href="#">User</Nav.Link>
            <Nav.Link href="#">Agent</Nav.Link>
          </Nav>
          <Button variant="outline-danger">Log out</Button>
        </Container>
      </Navbar>

      <Container className="my-4">
        <h4>Users Complaints</h4>
        <Card className="mb-3">
          <Card.Body>
            <p><strong>Name:</strong> sad</p>
            <p><strong>Address:</strong> sdadsad</p>
            <p><strong>City:</strong> dsaksa</p>
            <p><strong>State:</strong> sadsad</p>
            <p><strong>Pincode:</strong> 232131</p>
            <p><strong>Comment:</strong> dsasdas</p>
            <p><strong>Status:</strong> dda</p>
            <Button variant="warning">Assign ⏷</Button>
          </Card.Body>
        </Card>

        <h4>Agents</h4>
        <Card>
          <Card.Body>No Agents to show</Card.Body>
        </Card>
      </Container>

      <FooterC />
    </>
  );
};

export default AdminDashboard;
