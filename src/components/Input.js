import React from 'react';
import { useFormContext } from 'react-hook-form';

export const InputText = ({ props }) => {
  const { register } = useFormContext();
  const { name, label, type} = props;

  return ( 
    <div className="input-text">
      <label htmlFor={name}> {label}</label>
      <input type={type} name={name} id={name} ref={register} />
    </div>
   );
};

export const InputCheckbox = ({ props }) => {
   const { register } = useFormContext();
   const { name, label, type, choices } = props;
  
  return ( 
    <div className="input-checkbox">
      { label && (<label htmlFor={name}> {label}</label>) }
      { choices.map(choice => (
        <div className="label" key={choice.value}><input type={type} name={name} value={choice.value} ref={register} />{choice.label}</div>
      ))}
    </div>
   );
};