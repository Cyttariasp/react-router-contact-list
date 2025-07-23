import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Edit() {
  const [form, setForm] = useState({
    Name: "",
    addres: "",
    telefono: "",
    mail: "",
  });

  const { contactId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://playground.4geeks.com/contact/${contactId}`)
      .then((res) => res.json())
      .then((data) =>
        setForm({
          Name: data.name,
          addres: data.address,
          telefono: data.phone,
          mail: data.email,
        })
      )
      .catch((error) => console.error("Error", error));
  }, [contactId]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://playground.4geeks.com/contact/agendas/cris/contacts/${contactId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.Name,
            address: form.addres,
            phone: form.telefono,
            email: form.mail,
          }),
        }
      );

      if (!res.ok) throw new Error("Error al actualizar contacto");

      const data = await res.json();
      console.log("Contacto actualizado:", data);
      navigate("/");
    } catch (err) {
      console.error("Error al actualizar contacto:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1> Edit contact</h1>
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

export default Edit;
