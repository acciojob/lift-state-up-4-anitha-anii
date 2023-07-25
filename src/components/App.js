import React, { Component } from 'react';
import './../styles/App.css';
import ChildComponent from './ChildComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { id: 1, name: 'Item 1', price: 10 },
        { id: 2, name: 'Item 2', price: 15 },
        { id: 3, name: 'Item 3', price: 20 },
      ],
      newItemName: '',
      newItemPrice: '',
    };
  }

  handleRemoveItem = (itemId) => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems.filter((item) => item.id !== itemId),
    }));
  };

  handleAddItem = () => {
    const { newItemName, newItemPrice } = this.state;
    if (newItemName && newItemPrice) {
      const newItem = {
        id: Date.now(), // You can use any unique identifier for the new item
        name: newItemName,
        price: parseFloat(newItemPrice),
      };

      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, newItem],
        newItemName: '',
        newItemPrice: '',
      }));
    }
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { newItemName, newItemPrice } = this.state;

    return (
      <div className="parent">
        <h2>Cart Items</h2>
        <label>Item Name</label>
        <input
          type='text'
          name="newItemName"
          value={newItemName}
          onChange={this.handleInputChange}
        />
        <label>Item Price</label>
        <input
          type='number'
          name="newItemPrice"
          value={newItemPrice}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddItem}>Add Item</button>
        <ChildComponent cartItems={this.state.cartItems} onRemoveItem={this.handleRemoveItem} />
      </div>
    );
  }
}

export default App;

