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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = {
      full_name: form.Name,
      email: form.mail,
      phone: form.telefono,
      address: form.addres,
      agenda_slug: "cris",
    };

    try {
      const res = await fetch(
        "https://playground.4geeks.com/contact/agendas/cris/contacts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.Name,
            address: form.addres,
            phone: form.telefono,
            email: form.mail,
            agenda_slug: "cris",
          }),
        }
      );

      if (!res.ok) throw new Error("Error al crear contacto");

      const data = await res.json();
      console.log("Contacto creado:", data);

      navigate("/");
    } catch (err) {
      console.error("Error al guardar contacto:", err);
    }
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
