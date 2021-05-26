import React, { useState } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

const initialFormValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  role: '',
};

const SignUp = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/register', formValues)
      .then((res) => {
        console.log('res:', res);
        //res.data.payload gives us token
        localStorage.setItem('token', res.data.payload);
        //   props.history.push('/protected/bubbles')
      })
      .catch((err) => {
        console.log({ 'err:': err.response.data });
      });
  };

  return (
    <form className='text-center' onSubmit={handleSubmit}>
      <h1>Sign up for Anywhere Fitness!</h1>

      <div className='form-group'>
        <label htmlFor='first name'>First Name</label>
        <input
          type='text'
          name='firstname'
          className='form-control'
          value={formValues.firstname}
          onChange={handleChange}
          placeholder='First Name...'
        />
      </div>

      <div className='form-group'>
        <label>Last Name</label>
        <input
          name='lastname'
          value={formValues.lastname}
          onChange={handleChange}
          type='text'
          className='form-control'
          placeholder='Last name...'
        />
      </div>

      <div className='form-group'>
        <label>Email</label>
        <input
          name='email'
          value={formValues.email}
          onChange={handleChange}
          type='email'
          className='form-control'
          placeholder='Enter email...'
        />
      </div>

      <div className='form-group'>
        <label>Password</label>
        <input
          name='password'
          value={formValues.password}
          onChange={handleChange}
          type='password'
          className='form-control'
          placeholder='Enter password...'
        />
      </div>
      <br />
      <div>
        <label id='role-dropdown'>
          <select name='role' value={formValues.role} onChange={handleChange}>
            <option value='client'>Client</option>
            <option value='instructor'>Instructor</option>
          </select>
        </label>
        <label>
          Auth Code:
          <input type='text' name='authcode' placeholder='Instructor Only...' />
        </label>
      </div>
      <br />
      <button type='submit' className='btn btn-dark btn-block'>
        Register
      </button>
      <p className='forgot-password text-right'>
        Already registered <a href='#'>Log In?</a>
      </p>
    </form>
  );
};

export default SignUp;
