import React from 'react'
import spinner from '../assets/spinner-solid.svg';
import './Spinner.css';

export const Spinner = () => {
  console.log("desde el spinner");
  return (
    <img src={spinner} width="60" className='spinner' alt="" />
  )
}
