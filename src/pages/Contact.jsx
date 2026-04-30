import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col lg={8}>
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold text-dark mb-3">Contact Us</h1>
            <p className="lead text-muted">
              Have questions or suggestions? We'd love to hear from you. Reach out to the Gender and Sexuality Campus Center.
            </p>
          </div>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}
