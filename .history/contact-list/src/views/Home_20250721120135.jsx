import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <button className="btn btn-success"> Add new contact</button>
      </div>
      <div className="card mb-3" style={{ width: "75rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/32935737/pexels-photo-32935737.jpeg"
              classNameName="card-img-left rounded-circle"
              style={{ width: "10rem", height: "10rem" }}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">NOMBRE Contacto</h5>
              <p className="card-text">Direccion</p>
              <p className="card-text">telefono</p>
              <p className="card-text">e-mail</p>
            </div>
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary">edit</button>
            <button className="btn btn-danger">delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
