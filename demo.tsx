import React, { createRef, useEffect, useState } from 'react';
import './index.css';
import { Input } from 'antd';

const App: React.FC = () => {
  const [pin, setPin] = useState(Array(6).fill(''));
  const inputs = Array.from(Array(6), () => createRef());

  const onChangeHandler = (e, index) => {
    // console.log(e);
    // console.log(index);
    // debugger;
    setPin((prevState) => {
      return Object.assign([], prevState, { [index]: e.target.value });
    });
    // if (index === 5) return;
    // // if (index === 0 && )

    // console.log('value', e.target.value);
    // if (Boolean(e.target.value))
    //   inputs[index + 1]?.current?.focus({ cursor: 'all' });
  };

  const handleKeyup = (e, index) => {
    // console.log('User pressed: ', e.key);

    // console.log(message);
    if (Boolean(e.target.value))
      inputs[index + 1]?.current?.focus({ cursor: 'all' });
    // debugger;

    if ((e.key === 'Backspace' || e.key === 'Delete') && index !== 0) {
      // setPin((prevState) => {
      //   inputs[index - 1].current?.focus({ cursor: 'all' });
      //   return Object.assign([], prevState, { [index]: e.target.value });
      // });

      inputs[index - 1].current?.focus({ cursor: 'all' });
    }
  };

  useEffect(() => {
    console.log(pin);
  }, [pin]);

  return (
    <>
      {inputs.map((ref, index) => {
        return (
          <Input
            ref={ref}
            value={pin[index]}
            placeholder="Basic usage"
            key={index}
            onChange={(e) => onChangeHandler(e, index)}
            onKeyUp={(e) => handleKeyup(e, index)}
            maxLength={1}
            onFocus={(e) => e.target.select()}
          />
        );
      })}
    </>
  );
};

export default App;
