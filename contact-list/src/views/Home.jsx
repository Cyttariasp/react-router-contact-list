import { Link } from "react-router-dom";
import Card from "../ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

const Home = () => {
  const { store } = useGlobalReducer();
  console.log(store);

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
            Name={store.Name}
            addres={store.addres}
            telefono={store.telefono}
            mail={store.mail}
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
};

export default Home;
