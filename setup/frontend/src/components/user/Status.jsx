import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

const Status = () => {
  const [email, setEmail] = useState('');
  const [complaints, setComplaints] = useState([]);

  const fetchComplaints = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/my-complaints?email=${email}`);
      setComplaints(res.data);
    } catch (err) {
      console.error('Error fetching complaints:', err);
    }
  };

  useEffect(() => {
    if (email) fetchComplaints();
  }, [email]);

  return (
    <Container className="mt-4">
      <h2 className="mb-4 text-center">📌 Track Complaint Status</h2>
      <Form.Group className="mb-4">
        <Form.Label>Enter your email</Form.Label>
        <Form.Control
          type="email"
          placeholder="example@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Row>
        {complaints.map((c, idx) => (
          <Col md={6} key={idx}>
            <Card className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>{c.name}</Card.Title>
                <Card.Text>
                  <strong>Complaint:</strong> {c.complaint}
                </Card.Text>
                <Card.Text>
                  <strong>Status:</strong> {c.status || 'Pending'}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Status;
