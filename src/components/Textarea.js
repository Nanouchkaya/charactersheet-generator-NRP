import React from 'react';
import { useFormContext } from 'react-hook-form';

const Textarea = ({ props }) => {
  const { register } = useFormContext();
  const { name, placeholder, label } = props;

  return ( 
    <div className="textarea">
      <label htmlFor={name}> {label}</label>
      <textarea ref={register} name={name} placeholder={placeholder}></textarea>
    </div>
   );
};

export default Textarea;