import React from 'react';

const ChildComponent = ({ cartItems, onRemoveItem }) => {
  return (
    <div className="child">
  <h2>Child Component</h2>
  <ul>
    {cartItems.map((item) => (
      <li key={item.id} className='child li'>
        <span id="itemName" contenteditable>{item.name}</span>
        <span id="itemPrice">{item.price}</span>
        <button onClick={() => onRemoveItem(item.id)}>Remove</button>
      </li>
    ))}
  </ul>
</div>

  );
};

export default ChildComponent;

