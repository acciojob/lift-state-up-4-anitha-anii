import React from 'react';

const ChildComponent = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="child">
      {cartItems.map((item) => (
        <div key={item.id}>
          <span id="itemName">{item.name}</span>
          <span id="itemPrice">{item.price}</span>
          <button onClick={() => onRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default ChildComponent;
