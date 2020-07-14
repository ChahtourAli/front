import React from 'react';
import image from '../../assets/attijari_tunisie2x_1_0.png';
import { Link } from 'react-router-dom';
import { signout } from '../../actions/auth/auth';
import { useDispatch } from 'react-redux';
function Navbar() {
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-column align-items-center">
      <div style={{ width: '100vw', backgroundColor: '#f9b701' }}>
        <img
          className="img-fluid  d-flex"
          style={{ height: 200, margin: 'auto' }}
          src={image}
        />
      </div>
      <div
        style={{ float: 'left', width: '100vw', backgroundColor: '#de5a29' }}
      >
        <Link to="/home" style={{ color: 'white' }}>
          {' '}
          acceuil
        </Link>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-primary col-lg-12"
        style={{ width: '100vw' }}
      >
        <button className="navbar-toggler " type="button">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link
                className="nav-link"
                to="/Commande"
                style={{ color: 'white' }}
              >
                Commande <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/Versement"
                style={{ color: 'white' }}
              >
                Versement
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/historiqueOperation"
                style={{ color: 'white' }}
              >
                Historique des opérations
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ width: '100vw' }}>
        <div className="d-flex  justify-content-between">
          <div>
            <p>Ali</p>
            <p>Agence</p>
          </div>
          <div>
            <button type="button" class="btn btn-outline-danger ">
              <i className="fa fa-times"></i> Deconnexion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
