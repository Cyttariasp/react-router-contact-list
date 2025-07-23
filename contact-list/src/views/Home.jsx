import { Link } from "react-router-dom";
import Card from "../ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";

const Home = () => {
  const { store } = useGlobalReducer();
  console.log(store);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://playground.4geeks.com/contact/agendas/cris/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data.contacts))
      .catch((error) => console.error("Error al obtener los contactps", error));
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-end my-3">
        <Link
          className="btn btn-success d-flex justify-content-end"
          style={{ width: "10rem" }}
          to="/add"
        >
          Add new contact
        </Link>
      </div>
      <ul>
        {contacts.map((contact) => (
          <li className="list-group-item" key={contact.id}>
            <Card
              id={contact.id}
              image="https://static.vecteezy.com/system/resources/previews/013/360/247/non_2x/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg"
              Name={contact.name}
              addres={contact.address}
              telefono={contact.phone}
              mail={contact.email}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
