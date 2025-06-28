import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const AccordionAdmin = () => {
  return (
    <Container className="mt-5">
      <h4 className="mb-3">Admin Tools Panel</h4>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Assign Complaints</Accordion.Header>
          <Accordion.Body>
            Assign complaints to available agents based on workload.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Monitor Activity</Accordion.Header>
          <Accordion.Body>
            Track all agent and user activity on the platform.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Manage Roles</Accordion.Header>
          <Accordion.Body>
            Change user roles to agent or admin as needed.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default AccordionAdmin;
