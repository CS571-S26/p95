import { Card, Button, Badge, Col } from 'react-bootstrap';

export default function MediaCard({ item, onToggleCheckout }) {
  return (
    <Col md={4} className="mb-4">
      <Card className="h-100 shadow-sm border-0" style={{ backgroundColor: '#f0fbfc' }}>
        <Card.Body className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title as="h3" className="h5 text-dark mb-0">{item.title}</Card.Title>
            <Badge bg={item.available ? 'success' : 'secondary'} className="ms-2">
              {item.available ? 'Available' : 'Checked Out'}
            </Badge>
          </div>
          <Card.Subtitle className="mb-2 text-muted">by {item.author}</Card.Subtitle>
          <Card.Text>{item.summary}</Card.Text>
          
          <Button 
            variant={item.available ? 'info' : 'secondary'} 
            className="mt-auto text-white fw-semibold"
            style={item.available ? { backgroundColor: '#00838f', borderColor: '#00838f' } : {}}
            onClick={() => onToggleCheckout(item.id)}
            disabled={!item.available}
            aria-label={item.available ? `Check out ${item.title}` : `${item.title} is checked out`}
          >
            {item.available ? 'Check Out' : 'Unavailable'}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}