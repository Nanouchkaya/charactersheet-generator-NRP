import React from 'react';
import { useFormContext } from 'react-hook-form';
import Code from './Code';

const CodeAdP = () => {
  const { getValues } = useFormContext();
  const data = getValues();
  const selectVal = {
   race : data.race ? data.race.label : '',
   align : data.alignement ? data.alignement.label : '',
   class : data.classe ? data.classe.label : '',
  };

const codePassport = `<div class="character-sheet"><h4 class="character-sheet-name" style="background-image: url(https://raw.githubusercontent.com/Skalleface/images-hosting/master/NRP/V9/ban_adp.jpg)"><span>${data.identity}</span></h4>
<div class="character-sheet-passeport"><span class="character-sheet-nm color-adp">Aventures du passe</span>
<p class="scrollbar scrollbg-adp">[b]○ Prénom et Nom :[/b] ${data.identity}
[b]○ Age :[/b] ${data.ageP}
[b]○ Alignement :[/b] ${selectVal.align}
[b]○ Race :[/b] ${selectVal.race}
[b]○ Classe :[/b] ${selectVal.class}
[b]○ Métier :[/b] ${data.metier}</p></div>`;

const codeLook = `<div class='character-sheet-look scrollbar scrollbg-adp'>
<h5 class='post-subtitle-3 border-adp'>Cherche coiffeur (mort ou vif)</h5>
[b]- Grand ou petit ? Ou entre les deux ? [/b] ${data.size}

[b]- T’as des signes particuliers ?[/b] ${data.sign}

[b]- Décris-nous un peu ton style vestimentaire : [/b] ${data.clothes}

[b]- Y a-t-il un objet que tu portes toujours sur toi ?[/b] ${data.object}</div>`;

const codeStory = `<div class='character-sheet-story'><div class='character-sheet-inner border-adp scrollbar scrollbg-dark'><h5 class='post-subtitle-3'>Histoire [i](courte)[/i]</h5>
${data.story}</div></div></div>`;

const codeInterview = `<div class="character-sheet-avatar"><img src="${data.url}" alt="${data.identity}" /></div>
<div class="character-sheet-interview"><div class="character-sheet-inner scrollbar scrollbg-adp"><h5 class="post-subtitle-3 border-adp color-adp">Interview avec un troll à trois orteils</h5>
[b]- Avoue. Y’a une race que t’aimes moins/plus que les autres ![/b] ${data.q1}

[b]- Un inconnu te propose un deal : tu te fais avoir, en général ?[/b] ${data.q2}

[b]- Tu te retrouves face à trois trolls super vénères... Qu'est-ce que tu fais ?[/b] ${data.q3}

[b]- Où est-ce que tu dors le soir ? (Ou le matin. Ou l’après-midi. Tu dors, d'abord ?)[/b] ${data.q4}

[b]- Une journée normale, pour toi, ça ressemble à quoi ?[/b] ${data.q5}

[b]- Si tu possédais le miroir de Guldin, qu'est-ce que tu en ferais ?[/b] ${data.q6}</div></div>`;
  
  return ( 
    <Code codePassport={codePassport} codeInterview={codeInterview} codeLook={codeLook} codeStory={codeStory} />
    );
}
 
export default CodeAdP;