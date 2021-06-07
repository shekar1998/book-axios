import React, { createContext, useReducer } from 'react'
import reducer from '../reducer/BookReducer'

interface Props {
    children:any
}

export const BookContext = createContext<any>({});

const initialState = {  
    books:[],
    searchBook:[],
    authenticate: true,
    token: '',
    message:'Welcome 🙂',
    modal: false,
    select:'',
    search:'',
    email:'',
    otp:false,
}

const BookContextProvider = (props:Props) => {
    const [books, dispatch] = useReducer(reducer, initialState);

    return (
        <BookContext.Provider value={{ books , dispatch}} >
            {props.children}
            </BookContext.Provider>
    )
}

export default BookContextProvider;