import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { BookContext } from '../context/BookContext';
import Card from './Card';
import Add from './Addbook';
import Subcard from './subcard';
import Search from './search';
import Login from './login';
import Signin from './signup';
import '../index.css';

export default function Navigation() {
  // const [value, setValue] = useState(false);
  const [log, setLog] = useState('');
  const state = useContext(BookContext);
  const { dispatch } = useContext(BookContext);

  // const onValue = (val: any) => {
  //   console.log('Id===>' + val);
  //   setValue(val);
  // };

  let value1 = state.books.otp;
  console.log('value 111===>', value1);

  function logout() {
    localStorage.clear();
    setTimeout(() => {
      setLog('');
    }, 2000);
    setLog('You have been logged out successfully !');
    dispatch({ type: 'MODAL', payload: false })
  }

  window.onload = function () {
    const token = localStorage.getItem('token');
    if (token && state.books.otp) {
      dispatch({ type: 'MODAL', payload: true })
    } else dispatch({ type: 'MODAL', payload: false })
  };

  return (
    <Router>
      <div className='main-font'>
        <nav className='navbar navbar-expand-lg navbar-dark primary-color'>
          <a className='navbar-brand' href='#'>
            Book Management App
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#basicExampleNav'
            aria-controls='basicExampleNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'>Search</span>
          </button>
          <div className='collapse navbar-collapse' id='basicExampleNav'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='#'>
                  Home
                  <span className='sr-only'>(current)</span>
                </a>
              </li>
              {value1 && (
                <li className='nav-item'>
                  <Link to='/books'>
                    <a className='nav-link' href='#'>
                      Books
                      <span className='sr-only'>(current)</span>
                    </a>
                  </Link>
                </li>
              )}
              {value1 && (
                <li className='nav-item'>
                  <Link to='/AddBook'>
                    <a className='nav-link addbook' href='#'>
                      Add Books
                      <span className='sr-only'>(current)</span>
                    </a>
                  </Link>
                </li>
              )}
              {value1 && (
                <li className='nav-item'>
                  <Link to='/'>
                    <a onClick={logout} className='nav-link addbook' href='#'>
                      Logout
                      <span className='sr-only'>(current)</span>
                    </a>
                  </Link>
                </li>
              )}
              {!value1 && (
                <li className='nav-item'>
                  <Link to='/login'>
                    <a className='nav-link' href='#'>
                      Login
                      <span className='sr-only'>(current)</span>
                    </a>
                  </Link>
                </li>
              )}
              {!value1 && (
                <li className='nav-item'>
                  <Link to='/signup'>
                    <a className='nav-link' href='#'>
                      SignIn
                      <span className='sr-only'>(current)</span>
                    </a>
                  </Link>
                </li>
              )}
            </ul>
            <Search />
          </div>
        </nav>
        <h1 className='loggedout'>{log}</h1>
      </div>
      <Switch>
        <Route exact path='/books' >
        <Card />
        </Route>
        <Route exact path='/AddBook'>
          <Add />
        </Route>
        <Route exact path='/books/:val'>
          <Subcard />
        </Route>
        <Route exact path='/login' component={() => <Login />} />
        <Route exact path='/signup'>
          <Signin />
        </Route>
      </Switch>
    </Router>
  );
}
