import React, { Component } from 'react';
import './App.css';
import Product from './Product';
import Promo from './Promo';

class App extends Component {
  render() {
    return (
      
      <div className="row">
      <Product judul="Power bank" harga="10.000"/>
      <Product judul="Power bank" harga="10.000"/>
      <Product judul="Power bank" harga="10.000"/>
      <Product judul="Power bank" harga="10.000"/>
      </div>
    );
  }
}

export default App;
