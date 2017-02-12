import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import './ShoppingCart.css';

export class ShoppingCart extends Component {

  renderShoppingCart = () => {
    const { shoppingCart, removeFromCartAction } = this.props;
    return shoppingCart.map((item) => {
      return (
        <li
          key={item.id}
          className="ShoppingCart-list-item"
          onClick={() => removeFromCartAction(item.id)}
        >
          <img role="presentation" className={'Items-image'} src={item.link} />
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

const mapDispatchToProps = (dispatch) => ({
  removeFromCartAction: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
