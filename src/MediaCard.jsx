export default function MediaCard({ item, onToggleCheckout }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{item.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{item.author}</h6>
          <p className="card-text flex-grow-1">{item.summary}</p>
          
          <div className="mt-auto">
            <p className="mb-2">
              Status: <strong className={item.available ? "text-success" : "text-danger"}>
                {item.available ? 'Available' : 'Checked Out'}
              </strong>
            </p>
            <button 
              className={`btn w-100 ${item.available ? 'btn-primary' : 'btn-outline-danger'}`}
              onClick={() => onToggleCheckout(item.id)}
            >
              {item.available ? 'Check Out' : 'Return Item'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}