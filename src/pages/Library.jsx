import MediaCard from '../MediaCard';

export default function Library({ media, onToggleCheckout }) {
  const myMedia = media.filter(item => !item.available);

  return (
    <div className="container">
      <h2 className="mb-4">Community Lending Library</h2>
      <div className="row">
        {media.map(item => (
          <MediaCard 
            key={item.id} 
            item={item} 
            onToggleCheckout={onToggleCheckout} 
          />
        ))}
      </div>

      <hr className="my-5" />
      
      <h3 className="mb-3">My Media Borrowed</h3>
      {myMedia.length === 0 ? (
        <p className="text-muted">You haven't checked out any items yet.</p>
      ) : (
        <ul className="list-group">
          {myMedia.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span><strong>{item.title}</strong> by {item.author}</span>
              <button className="btn btn-danger" onClick={() => onToggleCheckout(item.id)}>
                Return
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}