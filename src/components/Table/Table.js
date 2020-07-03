import React from 'react';

function Table() {
  return (
    <div>
      <table className="table col-lg-11 m-auto">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Code Agence</th>
            <th scope="col">Lib Agence</th>
            <th scope="col">Code Devise</th>
            <th scope="col">Lib Devise</th>
            <th scope="col">Encaisse Min</th>
            <th scope="col">Encaisse Opt</th>
            <th scope="col">Encaisse Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              <input />
            </th>
            <td></td>
            <td>
              <input />
            </td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
