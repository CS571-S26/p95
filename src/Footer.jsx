import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <div className="container text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} UW Madison Gender and Sexuality Campus Center. All rights reserved.</p>
        <small>This is a student project website.</small>
      </div>
    </footer>
  );
}