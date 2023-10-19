import React from 'react';
import InputForm from '../../general/inputForm/InputForm';
import SubmitButton from '../../general/SubmitButton/SubmitButton';

const LoginForm = () => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center mt-5'>
        <form className='col-4'>
          <InputForm label='Usuario o email' type='text'/>
          <InputForm label='Password' type='password'/>
          <SubmitButton contentText='Ingresar'/>
        </form>
      </div>
    </div>
  )
}

export default LoginForm