export default function Home() {
  return (
    <div className="container">
      <h1 className="mb-4">Gender and Sexuality Campus Center</h1>
      <p className="lead">Welcome to the hub for LGBTQ+ resources, and community at UW Madison.</p>
      
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Restroom Map</h5>
              <p className="card-text">Locate gender-neutral restrooms across campus.</p>
              <a href="https://lgbt.wisc.edu/support/navigate-campus/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                View Map
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">About Gender & Pronouns</h5>
              <p className="card-text">Guide to preferred name and pronoun policies.</p>
              <a href="https://upliftphilly.org/wp-content/uploads/2020/11/Gender-101_-Avoiding-Misgendering-and-Deadnaming.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                Read About Gender & Pronouns
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Local Directory</h5>
              <p className="card-text">Queer-owned businesses.</p>
              <a href="https://www.visitmadison.com/blog/stories/post/lgbtq-owned-businesses-in-madison/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                Local LGBTQ+ Owned Businesses
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Local Directory</h5>
              <p className="card-text">Student orgs.</p>
              <a href="https://lgbt.wisc.edu/get-involved/student-orgs/" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
                Student Orgs
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}