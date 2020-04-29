import React, { useState, useContext } from 'react';
import { useForm, FormContext } from 'react-hook-form';
import { formCategories, questionsGen, questionsAP, questionsADP, questionsCHIM, questionsXMEN, questionsZOMB } from '../formData.js';
import Fieldset from './Fieldset.js';
import CodeAP from './Codes/CodeAP';
import CodeAdP from './Codes/CodeAdP';
import CodeXmen from './Codes/CodeXmen';
import CodeZomb from './Codes/CodeZomb';
import CodeChim from './Codes/CodeChim';


const App = () => {
  const [code, setCode] = useState(false);

  const methods = useForm({
    defaultValues: {
      nm : '',  
    }
  });
  const { watch, getValues, handleSubmit } = methods;
  const instantValues = getValues();
  const watchNMChoice = watch('nm');

  const generalCat = [formCategories.catGen, formCategories.catChoice];
  const specificCat = [formCategories.catPassport, formCategories.catLook, formCategories.catCaractere, formCategories.catStory];

  const onSubmit = (data, e) => {
    e.preventDefault();
    setCode(data.nm);
  };

  return (
    <div className="inner">
      <header>
        <h1>Generateur Presentation</h1>
        <h2>pour Nano. RolePlay</h2>
      </header>
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} id="charactersheet-gen">
        { //render category in fieldset
          generalCat.map( category => {
            const currentCatQuestions = questionsGen.filter( question => question.category === category.id);

            return ( 
              <Fieldset 
                key={category.id} 
                category={category} 
                questions={currentCatQuestions} 
              /> );
          })
        }

        {  watchNMChoice && (
          specificCat.map( category => {
            switch (instantValues.nm) {
              case 'ap':
                return (<Fieldset key={category.id} category={category} questions={questionsAP} />);
              case 'adp':
                return (<Fieldset key={category.id} category={category} questions={questionsADP} />);
              case 'chim':
                return (<Fieldset key={category.id} category={category} questions={questionsCHIM} />);
              case 'xmen':
                return (<Fieldset key={category.id} category={category} questions={questionsXMEN} />);
              case 'zomb':
                return (<Fieldset key={category.id} category={category} questions={questionsZOMB} />);
              default: return ('NM non sélectionné');
            }
          }))}
          <p className="submit-buttons">
            <button className="submit-button" type="submit">Générer le code</button>
          </p>
      </form> 
      
      {(function () {
        switch (code) {
          case 'ap':
            return <CodeAP />;
          case 'chim':
            return <CodeChim />; 
          case 'zomb':
            return <CodeZomb />; 
          case 'xmen':
            return <CodeXmen />;
          case 'adp':
            return <CodeAdP />;        
          default:
            return null;
        }
        })()
      }  
    </FormContext>
  </div>
  )
}

export default App;