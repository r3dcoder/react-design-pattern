import React from 'react'

export  const partiallyApply = (Component, partialProps) => {
    return props=>{
        return <Component { ...partialProps} {...props}/>
    }
}


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
  
  export const DangerButton = partiallyApply(Button, {color:'red'});
  
  export const BigSuccessButton = partiallyApply(Button, {color:'green', size:'large'});