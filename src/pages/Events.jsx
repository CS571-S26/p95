import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import EventCard from '../components/EventCard';

const initialEvents = [
  { id: 1, title: 'Queer Movie Night', date: 'Oct 24, 7:00 PM', location: 'Union South', description: 'Join us for a screening of a classic queer film with popcorn and drinks provided.', rsvped: false },
  { id: 2, title: 'LGBTQ+ Career Panel', date: 'Nov 5, 5:00 PM', location: 'Grainger Hall', description: 'Hear from LGBTQ+ professionals across various industries about their career journeys.', rsvped: false },
  { id: 3, title: 'Trans Day of Remembrance Vigil', date: 'Nov 20, 6:00 PM', location: 'Library Mall', description: 'An annual observance that honors the memory of the transgender people whose lives were lost in acts of anti-transgender violence.', rsvped: false }
];

export default function Events() {
  const [events, setEvents] = useState(initialEvents);

  const handleRSVP = (id) => {
    setEvents(events.map(event => 
      event.id === id ? { ...event, rsvped: !event.rsvped } : event
    ));
  };

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-dark mb-3">Upcoming Events</h1>
        <p className="lead text-muted">
          Discover and RSVP for upcoming events hosted by the Gender and Sexuality Campus Center and our partners.
        </p>
      </div>
      
      <Row>
        {events.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
            onRSVP={handleRSVP} 
          />
        ))}
      </Row>
    </Container>
  );
}
