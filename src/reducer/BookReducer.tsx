import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { useEffect } from 'react';

const BookReducer = (state: any, action: any) => {
  switch (action.type) {

    case 'FETCH_DETAILS':
      console.log('Fetch happened');
      console.log(action.payload);
      return {
        ...state,
        books: action.payload,
      };

      case 'HIDE_BUTTON' :
        console.log(state, action);
        return { ...state,
          authenticate: action.payload.val,
          message: action.payload.message
        }
        
        case 'SEARCH' : 
        console.log(state, action);
        return {
          ...state,
          search:action.payload.search,
          select: action.payload.select
        }
        

      case 'SINGLE_BOOK_DETAILS' :
        console.log('Details');
        console.log(action.payload);
        return {
          ...state,
          books: action.payload
        };  

    case 'BOOK_DETAILS':
      console.log('😄');
      console.log(state, action);
      const data = action.payload;
      console.log(data); 
      return {
       ...state,
       searchBook:data }

    case 'LOGIN_MODAL':
        console.log(state, action);
        return {
          ...state,
          modal:action.payload.modal,
          email:action.payload.email,
          otp:action.payload.otp,
          message:action.payload.message,
        }

    case 'MODAL' :
      console.log(state, action);
      return {
        ...state,
        otp:action.payload
      }
      
  }
};

export default BookReducer;
