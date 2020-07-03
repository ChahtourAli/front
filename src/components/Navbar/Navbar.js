import React from 'react';
import image from '../../assets/attijari_tunisie2x_1_0.png';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className="d-flex flex-column align-items-center">
      <img className="img-fluid " style={{ height: 200 }} src={image} />
      <div style={{ float: 'left', width: '100vw' }}>
        <Link to="/home"> acceuil</Link>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light col-lg-12"
        style={{ width: '100vw' }}
      >
        <Link className="navbar-brand" to="/home">
          Bienvenue
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/Commande">
                Commande <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Versement">
                Versement
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/historiqueOperation">
                Historique des opérations
              </Link>
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
