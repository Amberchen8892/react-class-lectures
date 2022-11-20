import React, { useState } from 'react';

// components
import Button from './Button';

export default function StatefulComponent({ name, component }) {
  // state
  const [count, setCount] = useState(0);

  // action
  function handleIncrement() {
    console.log('handleIncrement');
    setCount(count + 1);
  }

  // view (ui)
  return (
    <div>
      <h4>
        This is stateful component: count is {count}
        <br />
        Name: {name}
      </h4>
      <Button 
        buttonText="Increment" 
        onClick={handleIncrement}
      />

      <br/>
      <h4>Pass props as an JSX</h4>

      {/* way 1: render a JSX */}
      {component} 
      
    </div>
  )
}