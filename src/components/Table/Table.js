import React from 'react';

function Table() {
  return (
    <div>
      <table class="table">
        <thead class="thead-dark">
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
            <td>Mark</td>
            <td>
              <input />
            </td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
