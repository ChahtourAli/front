import React, { useState } from 'react';
import TableCommande from 'components/Table/TableCommande';
import Modal from '../../components/ModalVersemment/Modal';
function Commande() {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <div>
      <TableCommande />
      <div style={{ width: '100vw', display: 'flex', marginTop: '5px' }}>
        {' '}
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          onClick={() => setIsHidden(false)}
          style={{ margin: 'auto' }}
        >
          Ajouter
        </button>
        {!isHidden && <Modal />}
      </div>
    </div>
  );
}

export default Commande;
