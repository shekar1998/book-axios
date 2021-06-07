import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/mdbootstrap/css/bootstrap.min.css';
import Homepage from './components/homepage';
import BookContextProvider from './context/BookContext';
import 'antd/dist/antd.css';
import './index.css';

function App() {
  return (
    <div className='main-font'>
      <BookContextProvider>
        <Homepage />
      </BookContextProvider>
    </div>
  );
}

export default App;
