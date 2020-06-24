import React from 'react';
import InputField from 'components/InputField';
import { reduxForm } from 'redux-form';
function Signin() {
  return (
    <form className="container align-items-center d-flex flex-column">
      <center>
        <h1>Login</h1>
      </center>
      <div className="col-4 space-3">
        <InputField name="login" label="Username" />
        <InputField
          name="pass"
          forgotPasswordMessage="forgot username/password"
          label="Password"
          type="password"
        />
        <button className="btn btn-primary btn-block ">Connexion</button>
      </div>
    </form>
  );
}

export default reduxForm({ form: 'Signinform' })(Signin);
