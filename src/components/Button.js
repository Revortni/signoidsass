import React from 'react';

const Button = ({ label, className, ...rest }) => {
  let style = className || [];

  return (
    <button className={['button ' + style]} {...rest}>
      {label}
    </button>
  );
};

export default Button;
