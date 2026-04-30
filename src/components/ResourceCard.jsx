import { Card, Button, Col } from 'react-bootstrap';

export default function ResourceCard({ title, description, link, linkText }) {
  return (
    <Col md={4} className="mb-4">
      <Card className="shadow-sm h-100 border-0" style={{ backgroundColor: '#f0fbfc' }}>
        <Card.Body className="d-flex flex-column">
          <Card.Title as="h3" className="h5 text-dark">{title}</Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
          <Button 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            variant="info"
            className="mt-auto text-white fw-semibold"
            style={{ backgroundColor: '#00838f', borderColor: '#00838f' }}
            aria-label={`Visit ${title}`}
          >
            {linkText}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
