import React from 'react';

const ChildComponent = ({ cartItems, onRemoveItem }) => {
  return (
   
    <ul className="child li">
         <h2>Child Component</h2>
      {cartItems.map((item) => (
        <li key={item.id}>
          <span id="itemName">{item.name}</span>
          <span id="itemPrice">{item.price}</span>
          <button onClick={() => onRemoveItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default ChildComponent;
