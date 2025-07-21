function Edit() {
  return (
    <div className="card mb-3" style={{ width: "75rem" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://images.pexels.com/photos/32935737/pexels-photo-32935737.jpeg"
            classNameName="d-flex card-img-left rounded-circle"
            style={{ width: "10rem", height: "10rem" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
