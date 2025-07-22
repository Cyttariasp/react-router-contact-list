import { Link } from "react-router-dom";
import Card from "../ContactCard";

function Home() {
  return (
    <div>
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
        <li>
          <Card
            image="https://static.vecteezy.com/system/resources/previews/013/360/247/non_2x/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg"
            Name="Contacto 1"
            addres="direccion 1"
            telefono="+569 4495 4280"
            mail="correo@corre.cl"
          />
        </li>
        <li>
          <Card
            image="https://static.vecteezy.com/system/resources/previews/013/360/247/non_2x/default-avatar-photo-icon-social-media-profile-sign-symbol-vector.jpg"
            Name="Contacto 2"
            addres="direccion 22"
            telefono="+56900000000"
            mail="correo@corre.cl"
          />
        </li>
      </ul>
    </div>
  );
}

export default Home;
