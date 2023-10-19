import React from 'react';
import InputForm from '../../general/inputForm/InputForm';
import SubmitButton from '../../general/SubmitButton/SubmitButton';

const RegisterForm = () => {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center mt-5'>
        <form className='col-4'>
          <InputForm label='Usuario' type='text'/>
          <InputForm label='Email' type='email'/>
          <InputForm label='Password' type='password'/>
          <InputForm label='Confirmar Password' type='password'/>
          <SubmitButton contentText='Registrar'/>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm