import React from 'react';
import { useCallback } from 'react';
import './Button.css';

const Button = (props) => {
  const clickHandler = useCallback(() => props.onClickHandler('Как дела', 'me'), [props]);

  return (
    <button className="Button" onClick={clickHandler}>
      {props.text}
    </button>
  );
};

export default Button;
