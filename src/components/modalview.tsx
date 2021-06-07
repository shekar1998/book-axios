import React, { SyntheticEvent, useContext, useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBInput,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { BookContext } from '../context/BookContext';

import axios from 'axios';
export default function Modalview() {
  const [otpvalue, setOtpValue]: any = useState('');
  const [centredModal, setCentredModal] = useState(true);
  const state = useContext(BookContext);
  const { dispatch } = useContext(BookContext);
console.log(state);

  console.log('EMail ', state.books.email);
  async function otpFetch() {
    console.log(otpvalue);
    console.log('EMail ', state.books.email);
    const d = {
      otp : otpvalue
    }
    console.log(d);
    const res = await axios
      .post('http://localhost:4000/otp', JSON.stringify(d), { headers: { 'Content-Type': 'application/json' } })
      console.log(res);
      if(res.data.message === 'Successful')
      {
          dispatch({ type: 'LOGIN_MODAL', payload:{message:'Login Successful 😃', otp:true}})
      }else if(res.data.message === 'Un-Successful'){
        dispatch({ type: 'LOGIN_MODAL', payload:{message: 'Login Failed, Try again', otp:false}})
      }
      console.log(state);
      
  }

  function otpDisplay() {
    console.log('gettng Executed');
    setCentredModal(!centredModal);
  }
  return (
    <div>
      <MDBModal tabIndex='-1' show={centredModal} getOpenState={(e: any) => setCentredModal(e)}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              {/* <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn> */}
            </MDBModalHeader>
            <MDBModalBody>
              <TextField
                id='outlined-textarea'
                label='Enter your OTP'
                onChange={(e: any) => setOtpValue(e.target.value)}
                placeholder='Placeholder'
                multiline
                variant='outlined'
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={otpFetch}>
                Submit
              </MDBBtn>
              <h3></h3>
              <MDBBtn color='secondary' onClick={otpDisplay}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </div>
  );
}
