import React from 'react';
import { useFormContext } from 'react-hook-form';
import Code from './Code';

const CodeXmen = () => {
  const { getValues } = useFormContext();
  const data = getValues();
  const selectVal = {
    race : data.race ? data.race.label : '',
    align : data.alignement ? data.alignement.label : '',
   };

const codePassport = `<div class="character-sheet"><h4 class="character-sheet-name" style="background-image: url(https://raw.githubusercontent.com/Skalleface/images-hosting/master/NRP/V9/ban_xmen.jpg)"><span>${data.identity}</span></h4>
<div class="character-sheet-passeport"><span class="character-sheet-nm color-xmen">X-Men</span>
<p class="scrollbar scrollbg-xmen">[b]○ Prénom et Nom :[/b] ${data.identity}
[b]○ Nom de code :[/b] ${data.identity}
[b]○ Age :[/b] ${data.ageP}
[b]○ Race :[/b] ${selectVal.race}
[b]○ Alignement :[/b] ${selectVal.align}
[b]○ Métier :[/b] ${data.metier}
[b]○ Pouvoir :[/b] ${data.pouvoir}</p></div>`;

const codeLook = `<div class='character-sheet-look scrollbar scrollbg-xmen'>
<h5 class='post-subtitle-3 border-xmen'>Cherche coiffeur (mort ou vif)</h5>
[b]- Grand ou petit ? Ou entre les deux ? [/b] ${data.size}

[b]- T’as des signes particuliers ?[/b] ${data.sign}

[b]- Décris-nous un peu ton style vestimentaire : [/b] ${data.clothes}

[b]- Y a-t-il un objet que tu portes toujours sur toi ?[/b] ${data.object}</div>`;

const codeStory = `<div class='character-sheet-story'><div class='character-sheet-inner border-xmen scrollbar scrollbg-dark'><h5 class='post-subtitle-3'>Histoire [i](courte)[/i]</h5>
${data.story}</div></div></div>`;

const codeInterview = `<div class="character-sheet-avatar"><img src="${data.identity}" alt="${data.identity}" /></div>
<div class="character-sheet-interview"><div class="character-sheet-inner scrollbar scrollbg-xmen"><h5 class="post-subtitle-3 border-xmen color-xmen">Interview avec Fox News</h5>
[b]- T'as Facebook ? Twitter ? Tumblr ? T'es geek ?[/b] ${data.q1}

[b]-Ta famille est cool et fonctionnelle ?[/b] ${data.q2}

[b]- C'est quoi tes passe-temps, dans la vie ?[/b] ${data.q3}

[b]- Une journée normale, pour toi, ça ressemble à quoi ?[/b] ${data.q4}

[b]- Si tu pouvais passer dans le journal de 20h, qu'aurais-tu à dire ?[/b] ${data.q5}

[b]- Si tu pouvais devenir mutant (si t'es humain) ou humain (si t'es mutant), tu le ferais ?[/b] ${data.q6}</div></div>`;

  return ( 
    <Code codePassport={codePassport} codeInterview={codeInterview} codeLook={codeLook} codeStory={codeStory} />
    );
}
 
export default CodeXmen;