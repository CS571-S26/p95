import { Card, Button, Col } from 'react-bootstrap';

export default function EventCard({ event, onRSVP }) {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: '#f0fbfc' }}>
        <Card.Body className="d-flex flex-column">
          <Card.Title as="h3" className="h5 text-dark">{event.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {event.date} | {event.location}
          </Card.Subtitle>
          <Card.Text>{event.description}</Card.Text>
          
          <Button 
            variant={event.rsvped ? 'secondary' : 'info'} 
            className="mt-auto text-white fw-semibold"
            style={!event.rsvped ? { backgroundColor: '#00838f', borderColor: '#00838f' } : {}}
            onClick={() => onRSVP(event.id)}
            aria-pressed={event.rsvped}
            aria-label={event.rsvped ? `Cancel RSVP for ${event.title}` : `RSVP for ${event.title}`}
          >
            {event.rsvped ? 'Cancel RSVP' : 'RSVP Now'}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
