import React from 'react';
import classes from './MyInput.module.css'
const MyInput = ({...props}, {children}) => {
  return (
    <input {...props} className={classes.input}>
      {children}
    </input>
  );
};

export default MyInput;
