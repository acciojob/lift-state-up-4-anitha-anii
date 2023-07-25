import React from 'react';

const ChildComponent = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="child">
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span id="itemName">{item.name}</span> - <span id="itemPrice">${item.price}</span>
            <button onClick={() => onRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
