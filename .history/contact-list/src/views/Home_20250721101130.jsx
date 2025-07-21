function Home() {
  return (
    <div className="card" style={{ width: "75rem" }}>
      <div className="left">
        <img
          src="https://images.pexels.com/photos/32935737/pexels-photo-32935737.jpeg"
          className="d-flex card-img-left rounded-circle"
          style={{ width: "10rem", height: "10rem" }}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Home;
