import React from 'react';

export default function EventCard({ event, onRSVP }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{event.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{event.date} at {event.location}</h6>
          <p className="card-text">{event.description}</p>
          <div className="mt-auto">
            {event.rsvped ? (
              <button 
                className="btn btn-success" 
                onClick={() => onRSVP(event.id)}
              >
                RSVP'd (Click to Cancel)
              </button>
            ) : (
              <button 
                className="btn btn-outline-primary" 
                onClick={() => onRSVP(event.id)}
              >
                RSVP Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
