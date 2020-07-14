import React, { useState } from 'react';
import InputField from 'components/InputField';
import { reduxForm } from 'redux-form';
import { useDispatch } from 'react-redux';
import { signin } from 'actions/auth/auth';
import { useHistory } from 'react-router-dom';
function Signin({ handleSubmit }) {
  const dispatch = useDispatch();

  const history = useHistory();
  const login = ({ name, password }) => {
    console.log(name);
    dispatch(signin(name, password, history));
  };
  return (
    <form
      onSubmit={handleSubmit(login)}
      className="container align-items-center d-flex flex-column"
    >
      <center>
        <h1 className="mt-5">Login</h1>
      </center>
      <div className="col-4 space-3">
        <InputField name="name" label="Username" />
        <InputField
          name="password"
          forgotPasswordMessage="forgot username/password"
          label="Password"
          type="password"
        />
        <button type="submit" className="btn btn-primary btn-block ">
          Connexion
        </button>
      </div>
    </form>
  );
}

export default reduxForm({ form: 'Signinform' })(Signin);
