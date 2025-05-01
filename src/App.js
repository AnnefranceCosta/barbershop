import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar.js';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Navbar />
      </div>
    );
  }
}

export default App;



