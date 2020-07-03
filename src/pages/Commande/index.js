import React from 'react';

function Commande() {
  return (
    <div>
      <form
        className="d-flex flex-column justify-content-around 
"
        style={{ height: '22vh' }}
      >
        <div className="form-group col-lg-4 m-auto">
          <label for="montant ">Montant pour commande en Euro</label>
          <div class="input-group-append">
            <input type="text" className="form-control" id="montant" />
            <span class="input-group-text" id="basic-addon1">
              €
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-around col-lg-5 m-auto ">
          <button type="submit" className="btn btn-primary">
            valider
          </button>
          <button type="submit" className="btn btn-primary">
            annuler
          </button>
        </div>
      </form>
    </div>
  );
}

export default Commande;
