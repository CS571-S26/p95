import { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Card className="shadow-sm border-0" style={{ backgroundColor: '#f0fbfc' }}>
      <Card.Body>
        <Card.Title as="h2" className="h4 text-dark mb-4">Send Us a Message</Card.Title>
        {submitted ? (
          <Alert variant="success" style={{ backgroundColor: '#e0f7fa', borderColor: '#00838f', color: '#005662' }}>
            Thank you for reaching out! We will get back to you soon.
          </Alert>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label className="fw-semibold">Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label className="fw-semibold">Email Address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" required />
            </Form.Group>

            <Form.Group className="mb-4" controlId="contactMessage">
              <Form.Label className="fw-semibold">Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="How can we help you?" required />
            </Form.Group>

            <Button 
              variant="info" 
              type="submit"
              className="text-white fw-semibold px-4"
              style={{ backgroundColor: '#00838f', borderColor: '#00838f' }}
            >
              Submit Message
            </Button>
          </Form>
        )}
      </Card.Body>
    </Card>
  );
}
