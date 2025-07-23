import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { emptyContact } from "../Store";

function Add() {
  const [form, setForm] = useState(emptyContact());

  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: form });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Add a new contact</h1>
        <div className="">
          <label className="form-label">Full name</label>
          <input
            type="text"
            name="Name"
            value={form.Name}
            onChange={handleChange}
            className="form-control"
            placeholder="Full name"
          />
        </div>
        <div className="">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="mail"
            value={form.mail}
            onChange={handleChange}
            className="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div className="">
          <label className="form-label">Phone number</label>
          <input
            type="number"
            className="form-control"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            placeholder="+569 xxxx xxxx"
          />
        </div>
        <div className="">
          <label className="form-label">Addres</label>
          <input
            type="text"
            className="form-control"
            name="addres"
            value={form.addres}
            onChange={handleChange}
            placeholder="calle 1234, Ciudad, Pais"
          />
        </div>
        <div className="d-flex justify-content-center my-3">
          <button className="btn btn-primary">Save</button>
        </div>
        <Link className="d-block" to="/">
          Back to contact list
        </Link>
      </form>
    </div>
  );
}

export default Add;
