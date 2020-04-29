import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';


const Code = ({codePassport, codeInterview, codeLook, codeStory}) => {
  const { getValues } = useFormContext();
  const data = getValues();

  const [copyState, setCopyState] = useState(false);

  const selectText = (target) => {
    const text = target.innerText;
    console.log(target);
    navigator.clipboard.writeText(text);
    setCopyState(!copyState);
    setTimeout(() => {
      setCopyState(!copyState);
    }, 200);
  }

  const selectLinkText = copyState ? 'Copié !' : 'Selectionner le code';

  const codeGen = `<div class="post-block-ink-2"><div class="post-inner bg-light"><h3 class="post-block-ink-title">Presente toi banane flambee</h3>
[b]Prénom :[/b] ${data.firstname}
[b]Age :[/b] ${data.ageJ}
[b]Activités :[/b] ${data.activities}
[b]Centres d'intérêts :[/b] ${data.interest}
[b]Où j'ai trouvé le forum :[/b] ${data.find}
[b]Un petit mot pour Nano. ? :[/b] ${data.note}
[b]Activité à Prévoir :[/b] ${data.presence}
[b]Bonus :[/b] ${data.bonus}</div></div>`;
  
  return (
    <div className="code-wrapper">
      <h4>Partie générale (à utiliser la première fois)</h4>
      <div className="code-content">
        <pre>{codeGen}</pre>
      </div>

      <h4>Partie fiche de personnage</h4>
      <div className="code-content">
      <a className="select-link" onClick={() => selectText(document.getElementById('code2'))}>{selectLinkText}</a>
        <pre id="code2">{codePassport}{codeLook}{codeInterview}{codeStory}</pre>
      </div>
    </div>
    );
}
 
export default Code;