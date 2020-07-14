import React from 'react';

function TableCommande() {
  return (
    <div>
      <table className="table  table-bordered col-lg-6 m-auto">
        <thead style={{ backgroundColor: '#A71A1A', color: '#fff' }}>
          <tr>
            <th scope="col">Code Agence</th>
            <th scope="col">Lib Agence</th>
            <th scope="col">Code Devise</th>
            <th scope="col">Lib Devise</th>
            <th scope="col">Type</th>
            <th scope="col">Montant</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td>
              <input />
            </td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TableCommande;
