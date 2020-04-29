import React from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { InputText, InputCheckbox } from './Input';
import Textarea from './Textarea';

const Fieldset = ({ category, questions }) => {
  const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  );
  
  return ( 
    <fieldset id={category.id} className="fieldset">
      <legend className="legend">{category.title}</legend>

      { // render category's questions
      questions.map( question => {
        if (question.category === category.id) {
          switch (question.type) {
            case 'text':
              return (<InputText props={question} key={question.id} />); 
            case 'url':
              return (<InputText props={question} key={question.id} />);                
            case 'radio' :
              return (<InputCheckbox props={question} key={question.id} />);
            case 'textarea' :
              return (
                <Textarea props={question} key={question.id} />);
            case 'select' :
              return (
                <div key={question.id} className="select">
                  <label className="label" htmlFor={question.name}>{question.label}</label>
                  <Controller
                    as={<Select options={question.options} />}
                    name={question.name}                     
                  />
                </div>
                );                     
            default:
            return 'Type de champs non précisé';
          };
        };
        return false;
      })}

    </fieldset>
   );
}
 
export default Fieldset;