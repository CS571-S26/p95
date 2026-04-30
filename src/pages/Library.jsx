import { Container, Row, ListGroup, Button } from 'react-bootstrap';
import MediaCard from '../components/MediaCard';

export default function Library({ media, onToggleCheckout }) {
  const myMedia = media.filter(item => !item.available);

  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-dark mb-3">Community Lending Library</h1>
        <p className="lead text-muted">
          Browse our collection of books, movies, and resources available for checkout.
        </p>
      </div>

      <Row>
        {media.map(item => (
          <MediaCard 
            key={item.id} 
            item={item} 
            onToggleCheckout={onToggleCheckout} 
          />
        ))}
      </Row>

      <hr className="my-5" />
      
      <h2 className="h3 mb-4 text-dark">My Borrowed Media</h2>
      {myMedia.length === 0 ? (
        <p className="text-muted fst-italic">You haven't checked out any items yet.</p>
      ) : (
        <ListGroup className="shadow-sm">
          {myMedia.map(item => (
            <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center py-3 border-0 border-bottom" style={{ backgroundColor: '#f0fbfc' }}>
              <span><strong className="text-dark">{item.title}</strong> by {item.author}</span>
              <Button 
                variant="danger" 
                size="sm"
                className="fw-semibold px-3"
                onClick={() => onToggleCheckout(item.id)}
                aria-label={`Return ${item.title}`}
              >
                Return
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
}