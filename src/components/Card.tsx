import React, {
  Component,
  ReactElement,
  SelectHTMLAttributes,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import Carousal from './carousel'
import { BrowserRouter as Router, Route, Switch, Link, Redirect, RouteComponentProps } from 'react-router-dom';
import Star from './star';
import '../index.css';
import axios from 'axios';
import { BookContext } from '../context/BookContext';
import { bookData12, deleteBook, searchBookById, searchBookByTitle, searchBookByAuthor } from './utils';
import { findAllByDisplayValue } from '@testing-library/dom';

interface Props {}

export default function Card(props: Props) {
  const state = useContext(BookContext);
  const { dispatch } = useContext(BookContext);

  const select = state.books.select;
  const value =state.books.search;
  console.log(select,value);

  useEffect(() => {
    display();
    bookData(state.books.select, state.books.search);
  }, [state.books.select, state.books.search]);

let value12:any;
  console.log(state);
  if(select && value)
  {
    value12 = state.books.searchBook;
    console.log('Search --------> ', value12);
    
  }else{
    value12 = state.books.books;
    console.log('Card -----------> ', value12);

  }

  function display() {
    bookData12().then((res) => {
      console.log(res.data);
      dispatch({
        type: 'FETCH_DETAILS',
        payload: res.data,
      });
    });
  }

  async function detailsSubmit(e: SyntheticEvent, title: string, id: number) {
    e.preventDefault();
    console.log(title);
    await deleteBook(title);
    display();
  }

  async function bookData(select: string, value: string) {
    if (select && value) {
      if (select === 'id') {
       await searchBookById(select, value).then((data) => {
        console.log(data.data);
          dispatch({ type: 'BOOK_DETAILS', payload: data.data });
        });
      }else if (select === 'title') {
       await searchBookByTitle(select, value).then((data) => {
          console.log(data.data);
          dispatch({ type: 'BOOK_DETAILS', payload: data.data });
        });
      }else if (select === 'author') {
        await searchBookByAuthor(select, value).then((data) => {
          console.log(data.data);
          dispatch({ type: 'BOOK_DETAILS', payload: data.data });
          value12 = state.books.searchBox;
          console.log(value12);
        });
          // console.log(state.books.searchBox);
      }
    }
  }
<br />
  return (
    <div className='card1-group'>
      <Carousal />
      <div className='card2-group'> 
      {value12.map((val: any) => {
        return (
          <div className='card11-group'>
            <div className='card-group'>
              <div className='card mb-4'>
                <div className='view overlay'>
                  <ul className='showcase'>
                    <li>
                      <figure className='photo'>
                        <img className='card-img-top' src={val.image} alt='Card image cap' />
                      </figure>
                    </li>
                  </ul>
                  <a href='#!'>
                    <div className='mask rgba-white-slight'></div>
                  </a>
                </div>
                <div className='card-body'>
                  <h4 className='card-title localtext'>
                    <abbr className='abbr' title={val.title}>
                      {val.title}
                    </abbr>
                  </h4>
                  <h5 className='card-text localtext1'>
                    <abbr className='abbr' title={val.author}>
                      {val.author}
                    </abbr>
                  </h5>
                  <h5 className='card-text'>
                    <span>
                      Rating: {val.ratings} <Star current={val.ratings} outof={5} minof={1} />
                    </span>
                  </h5>
                  <Link to={`/books/${val.title}`}>
                    <button type='button' className='btn btn-primary btn-md'>
                      Read more
                    </button>
                  </Link>
                  <button
                    type='button'
                    onClick={(e) => detailsSubmit(e, val.title, val.id)}
                    className='btn btn-primary btn-md2'
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
      
    </div>
  );
}
// onClick={(e) => detailsSubmit(e, val.id)}
