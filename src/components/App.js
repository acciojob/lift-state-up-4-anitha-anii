import React, { Component } from 'react';
import './../styles/App.css';
import ChildComponent from './ChildComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      availableItems: [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 20 },
        { id: 3, name: 'Item 3', price: 15 },
      ],
    };
  }

  addToCart = (item) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, item],
    }));
  };

  removeItemFromCart = (itemId) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item) => item.id !== itemId),
    }));
  };

  render() {
    return (
      <div className="parent">
        <h1>Shopping Cart</h1>
        <div className="available-items">
          <h2>Available Items</h2>
          <ul>
            {this.state.availableItems.map((item) => (
              <li key={item.id}>
                <span id="itemName">{item.name}</span> - <span id="itemPrice">${item.price}</span>
                <button
                  id="addToCartButton"
                  onClick={() => this.addToCart(item)}
                >
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        </div>
        <ChildComponent cartItems={this.state.cartItems} onRemoveItem={this.removeItemFromCart} />
      </div>
    );
  }
}

export default App
