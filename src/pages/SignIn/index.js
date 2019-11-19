import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { signInRequest } from '~/store/modules/auth/actions';

import logo from '../../assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('invalid e-mail')
    .required('email is required'),
  password: Yup.string().required('password required'),
});

export default function Signin() {
  // const dispatch = useDispatch();
  // const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    // dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="gympoint" />

      <Form schema={schema} onClick={handleSubmit}>
        <Input name="email" type="email" placeholder="seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="sua senha secreta"
        />
        <button type="submit">LOGIN</button>
        <Link to="/register">criar conta</Link>
      </Form>
    </>
  );
}
