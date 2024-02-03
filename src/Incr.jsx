import React, { useState } from 'react';

function Incr () {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const Square = () => {
    setCount(count **2);
  };
  const Reset = () => {
    setCount(count *0);
  };


  return (
    <div style={{backgroundColor:'black',color:'white',height:'20rem',width:'50rem',textAlign:'center',marginLeft:'20rem',borderRadius:'2rem'}}>
        
      <h2 style={{textAlign:'center',paddingTop:'6rem'}}> NumberCount: {count}</h2>
      <button style={{marginLeft:'3rem',marginTop:'1rem',}} onClick={increment}>Increment</button>
      <button style={{marginLeft:'2rem'}} onClick={decrement}>Decrement</button>
      <button style={{marginLeft:'2rem'}} onClick={Square}>Square</button>
      <button style={{marginLeft:'2rem'}} onClick={ Reset}> Reset value</button>


    </div>
  );
}

export default Incr;