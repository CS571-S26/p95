import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="mt-auto py-3 text-white text-center" style={{ backgroundColor: '#005662' }}>
      <Container>
        <p className="mb-0"> {new Date().getFullYear()} Gender and Sexuality Campus Center - UW Madison</p>
        <p className="mb-0"> Call at - (608) 265-3344 </p>
      </Container>
    </footer>
  );
}