import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Container className="py-5 text-center flex-grow-1 d-flex align-items-center justify-content-center">
      <Row>
        <Col>
          <h1 className="display-1 fw-bold text-dark">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead text-muted mb-4">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button 
            as={Link} 
            to="/" 
            variant="info"
            className="text-white fw-semibold px-4 py-2"
            style={{ backgroundColor: '#00838f', borderColor: '#00838f' }}
          >
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
