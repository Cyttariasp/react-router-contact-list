import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div>
      <div className="card mb-3" style={{ width: "75rem" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              //src="https://images.pexels.com/photos/32935737/pexels-photo-32935737.jpeg"
              src={props.image}
              classNameName="card-img-left rounded-circle"
              style={{ width: "10rem", height: "10rem" }}
            />
          </div>
          <div className="col-md-4">
            <div className="card-body">
              <h5 className="card-title">{props.Name}</h5>
              <p className="card-text">{props.addres}</p>
              <p className="card-text">{props.telefono}</p>
              <p className="card-text">{props.mail}</p>
            </div>
          </div>
          <div className="col-md-4">
            <Link className="btn btn-primary" to="/Edit">
              edit
            </Link>
            <button className="btn btn-danger">delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
