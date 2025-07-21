import { Link } from "react-router-dom";
import Card from "../ContactCard";

function Home() {
  return (
    <div>
      <div>
        <Link className="btn btn-success" to="/add">
          Add new contact
        </Link>
      </div>
      <Card
        Name="Contacto 1"
        addres="direccion 1"
        teledono="+569 4495 4280"
        mail="correo@corre.cl"
      />
    </div>
  );
}

export default Home;
