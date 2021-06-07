import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import '../style.css';
import '../util.css';
import '../main.css';
import '../index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import axios from 'axios';
import Modalview from './modalview';

interface Props {}

export default function Login(props: Props) {
  const [email, setEmail]: any = useState();
  const [password, setPassword]: any = useState();
  const state = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
  const data = {
    email: email,
    password: password,
  };

  async function detailsSubmit(e: SyntheticEvent) {
    e.preventDefault();
    state.books.view = false;
    const res = await axios.post('http://localhost:4000/login', JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(res.data.token);
    console.log('----------->', res);
    localStorage.setItem('token', res.data.data.token);
    if (res.status == 200) {
      dispatch({
        type: 'LOGIN_MODAL',
        payload: {message:'Welcome 🙂',otp:false, modal: true, email: email },
      });
    }  
    if (res.status == 200 && state.books.otp ) {
      dispatch({
            type: 'LOGIN_MODAL',
            payload: { message: 'You Have Logged In Successfully 🙂', modal:false, email:'', otp:true },
          });
      // props.oncell(true);
    }else{
      // props.oncell(false)
    }
  }

  console.log('modelview', state.books.modal);

  return (
    <div>
      {state.books.modal && <Modalview />}
      <link href='http://davidhulme.name/wp-content/uploads/2016/08/cropped-Books-Header-1-1.jpg' rel='stylesheet' />
      <div className='main-content main-font margintop'>
        <div className='limiter main-font'>
          <div className='container-login100 newmargin'>
            <div className='wrap-login100'>
              <div className='login100-form-title'>
                <span className='login100-form-title-1'>{state.books.message}</span>
              </div>
              <form className='login100-form validate-form'>
                <div className='wrap-input100 validate-input m-b-26' data-validate='Username is required'>
                  <span className='label-input100'>Email</span>
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                      setEmail(e.target.value)
                    }
                    className='input100'
                    type='text'
                    name='username'
                    placeholder='Enter email addreess'
                  />
                  <span className='focus-input100'></span>
                </div>
                <div className='wrap-input100 validate-input m-b-18' data-validate='Password is required'>
                  <span className='label-input100'>Password</span>
                  <input
                    onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                      setPassword(e.target.value)
                    }
                    className='input100'
                    type='password'
                    name='pass'
                    placeholder='Enter password'
                  />
                </div>
                <div className='flex-sb-m w-full p-b-30'>
                  <div className='contact100-form-checkbox'>
                    {/* <input className='input-checkbox100' id='ckb1' type='checkbox' name='remember-me' />
                      <label className='label-checkbox100'>Remember me</label> */}
                  </div>
                  <div>
                    <a href='#' className='txt1'>
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className='container-login100-form-btn'>
                  <button onClick={(e) => detailsSubmit(e)} className='login100-form-btn'>
                   Login with Email
                  </button>
                  <button onClick={(e) => detailsSubmit(e)} className='mnumber login100-form-btn'>
                    Login with M-Number
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


{/* <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Heading</h1>
              <h4 className='mb-3'>Subheading</h4>
              <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                Call to action
              </a>
            </div>
          </div>
        </div> */}