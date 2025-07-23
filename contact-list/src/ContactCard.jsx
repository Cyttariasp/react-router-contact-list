import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div>
      <div
        className="card mb-3 p-3 bg-secondary-subtle"
        //style={{ width: "75rem" }}
      >
        <div className="row g-0">
          <div className="col-md-4 d-flex justify-content-start align-items-center">
            <img
              src={props.image}
              className="card-img-left rounded-circle"
              style={{ width: "10rem", height: "10rem" }}
            />
          </div>
          <div className="col-md-4 d-flex align-items-start">
            <div className="card-body">
              <h5 className="card-title">{props.Name}</h5>
              <p className="card-text">{props.addres}</p>
              <p className="card-text">{props.telefono}</p>
              <p className="card-text">{props.mail}</p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end align-items-center gap-2">
            <Link className="btn btn-primary" to={`/edit/${props.id}`}>
              edit
            </Link>
            <button
              className="btn btn-danger"
              data-bs-toggle="modal"
              data-bs-target={`#modal-${props.id}`}
            >
              Delete
            </button>
            <div className="modal fade" id={`modal-${props.id}`} tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Are you shure?</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      If you delete this thing the entire universe will go
                      down!.
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={async () => {
                        try {
                          const res = await fetch(
                            `https://playground.4geeks.com/contact/agendas/cris/contacts/${props.id}`,
                            { method: "DELETE" }
                          );
                          if (!res.ok)
                            throw new Error("Error al eliminar contacto");
                          window.location.reload();
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      data-bs-dismiss="modal"
                    >
                      Confirm!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
