import { Container, Row, Col } from 'react-bootstrap';
import ResourceCard from '../components/ResourceCard';

export default function Home() {
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold text-dark mb-3">Gender and Sexuality Campus Center</h1>
        <p className="lead text-muted">
          Welcome to the hub for LGBTQ+ resources, and community at UW Madison.
        </p>
      </div>
      
      <Row className="mt-5">
        <ResourceCard 
          title="Restroom Map" 
          description="Locate gender-neutral restrooms across campus." 
          link="https://lgbt.wisc.edu/support/navigate-campus/" 
          linkText="View Map" 
        />
        <ResourceCard 
          title="About Gender & Pronouns" 
          description="Guide to preferred name and pronoun policies." 
          link="https://upliftphilly.org/wp-content/uploads/2020/11/Gender-101_-Avoiding-Misgendering-and-Deadnaming.pdf" 
          linkText="Read Guide" 
        />
        <ResourceCard 
          title="Local Directory" 
          description="Queer-owned businesses in Madison." 
          link="https://www.visitmadison.com/blog/stories/post/lgbtq-owned-businesses-in-madison/" 
          linkText="View Businesses" 
        />
        <ResourceCard 
          title="Student Orgs" 
          description="Find and connect with LGBTQ+ student organizations." 
          link="https://lgbt.wisc.edu/get-involved/student-orgs/" 
          linkText="View Orgs" 
        />
      </Row>
    </Container>
  );
}