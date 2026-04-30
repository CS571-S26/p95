import { Container, Row, Col, Image, Card } from 'react-bootstrap';

export default function About() {
  return (
    <Container className="py-5 flex-grow-1">
      <Row className="mb-5 align-items-center">
        <Col md={6} className="mb-4 mb-md-0">
          <h1 className="display-4 fw-bold mb-4" style={{ color: '#00838f' }}>About Us</h1>
          <p className="lead text-muted">
            The Gender and Sexuality Campus Center (GSCC) provides education, outreach, advocacy, and support for LGBTQ+ students, staff, and faculty at UW-Madison and their allies.
          </p>
          <p>
            We are committed to creating a campus environment where all individuals can thrive academically, professionally, and personally, regardless of their sexual orientation or gender identity.
          </p>
        </Col>
        <Col md={6}>
          <Image 
            src="/p95/images/Red_Gym_Reno20_4909-300x200.jpg"
            alt="Welcoming community center gathering space" 
            fluid 
            rounded 
            className="shadow" 
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm border-0 bg-light">
            <Card.Body className="p-4">
              <h3 className="h4 fw-bold text-dark mb-3">Our Mission</h3>
              <Card.Text>
                To provide a centralized, safe, and supportive space for LGBTQ+ individuals and allies on campus, fostering community building and personal development.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm border-0 bg-light">
            <Card.Body className="p-4">
              <h3 className="h4 fw-bold text-dark mb-3">Our Vision</h3>
              <Card.Text>
                A campus community that fully embraces and celebrates gender and sexual diversity, where everyone feels a sense of belonging and empowerment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100 shadow-sm border-0 bg-light">
            <Card.Body className="p-4">
              <h3 className="h4 fw-bold text-dark mb-3">Our Values</h3>
              <Card.Text>
                Inclusivity, intersectionality, empowerment, education, and advocacy are the core pillars that guide our work and programming.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={6} className="order-md-2 mb-4 mb-md-0">
          <h2 className="h2 fw-bold mb-4">Our Space</h2>
          <p className="text-muted">
            The GSCC is more than just an office; it's a vibrant gathering space. Whether you're looking for a quiet place to study, a comfortable spot to relax between classes, or a welcoming environment to meet new friends, our center is open to you.
          </p>
          <p className="text-muted">
            We offer an extensive library, comfortable lounge areas, and dedicated meeting spaces for student organizations and support groups.
          </p>
        </Col>
        <Col md={6} className="order-md-1">
          <Image 
            src="/p95/images/8a35b6ba-f8ce-4719-af8d-c9ee7f109511.sized-1000x1000.jpg"
            alt="Cozy study and lounge area" 
            fluid 
            rounded 
            className="shadow" 
          />
        </Col>
      </Row>
    </Container>
  );
}
