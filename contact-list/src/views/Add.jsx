import { Link } from "react-router-dom";

function Add() {
  return (
    <div>
      <h1> Add a new contact</h1>
      <div className="">
        <label for="exampleFormControlInputName" className="form-label">
          Full name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInputName"
          placeholder="Full name"
        />
      </div>
      <div className="">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="">
        <label for="exampleFormControlInputPhone" className="form-label">
          Phone number
        </label>
        <input
          type="number"
          className="form-control"
          id="exampleFormControlInputPhone"
          placeholder="+569 xxxx xxxx"
        />
      </div>
      <div className="">
        <label for="exampleFormControlInputAddres" className="form-label">
          Addres
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInputAddres"
          placeholder="calle 1234, Ciudad, Pais"
        />
      </div>
      <div className="d-flex justify-content-center my-3">
        <button className="btn btn-primary">Save</button>
      </div>
      <Link className="d-block" to="/">
        Back to contact list
      </Link>
    </div>
  );
}

export default Add;
