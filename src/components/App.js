import React, { Component } from 'react';
import './App.css';
import Items from '../containers/Items/Items';
import ShoppingCart from '../containers/ShoppingCart/ShoppingCart';

export default class App extends Component {

  render() {
    return (
      <div className={'App-mainbody'} >
          <h1>For Sale!</h1>
          <Items />
          <h1>Shopping Cart</h1>
          <ShoppingCart />
      </div>
    )
  }
}
