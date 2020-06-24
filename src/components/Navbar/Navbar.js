import React from 'react';
import image from '../../assets/attijari_tunisie2x_1_0.png';
function Navbar() {
  return (
    <div className="d-flex flex-column align-items-center">
      <img className="img-fluid " style={{ height: 200 }} src={image} />
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Bienvenue
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Commande <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Versement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Historique des opérations
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Déconnexion
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
