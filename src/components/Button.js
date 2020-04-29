import React from 'react';
import { useFormContext } from 'react-hook-form';

export default const Button = ({ props }) => {
  const { register } = useFormContext();
  const { type, value } = props;

  return ( 
    <div className="input">
      <button type={type} value={value} ref={register} />
    </div>
   );
};
