import React from 'react'


export const Button = (props) => {
  const { size, color, text, ...rest } = props;
  const padding = size === "large" ? 32 : 8;
  const fontSize = size === "large" ? 32 : 16;
  const style = { padding, fontSize, backgroundColor: color };
  
  return (
    <button style={style} {...rest}>
      {text}
    </button>
  );
};

export const DangerButton = (props) => {
  return <Button color="red" {...props} />;
};

export const BigSuccessButton = (props) => {
  return <Button size="large" color="green" {...props} />;
};