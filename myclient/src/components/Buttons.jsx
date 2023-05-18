import React from 'react';
import { UpdateButton1,UpdateButton2 } from '../api/user.api';
import { useLocation } from 'react-router-dom';
export function ButtonsComponent() {
  const location = useLocation();
  const data = location.state;
  console.log(data)
  const handleClick = async (button) => {
    event.preventDefault();    
    //console.log(`You clicked the ${button} button.`);
    if (button == 'first'){

        await UpdateButton1(data);
    }
    else{
        await UpdateButton2(data);

    }
  };

  return (
    <div>
      <button onClick={() => handleClick('first')}>First Button</button>
      <button onClick={() => handleClick('second')}>Second Button</button>
    </div>
  );
}
