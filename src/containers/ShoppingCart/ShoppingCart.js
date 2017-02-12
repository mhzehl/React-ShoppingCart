import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ShoppingCart.css';

export class ShoppingCart extends Component {

  renderShoppingCart = () => {
    const { shoppingCart } = this.props;
    return shoppingCart.map((item) => {
      return (
        <li
          key={item.id}
          className="ShoppingCart-list-item"
          onClick={() => console.log('Remove from Cart')}
        >
          <img role="presentation" src={item.link} />
          {item.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className={'ShoppingCart-list'}>
        {this.renderShoppingCart()}
      </ul>
    )
  }
}

const mapStateToProps = ({ shoppingCart }) => ({
  shoppingCart,
})

export default connect(mapStateToProps)(ShoppingCart)
