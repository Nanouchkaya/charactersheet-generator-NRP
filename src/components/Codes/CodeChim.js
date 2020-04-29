import React from 'react';
import { useFormContext } from 'react-hook-form';
import Code from './Code';

const CodeChim = () => {
  const { getValues } = useFormContext();
  const data = getValues();
  const selectVal = data.race ? data.race.label : '';

const codePassport = `<div class="character-sheet"><h4 class="character-sheet-name" style="background-image: url(https://raw.githubusercontent.com/Skalleface/images-hosting/master/NRP/V9/ban_chim.jpg)"><span>${data.identity}</span></h4>
<div class="character-sheet-passeport"><span class="character-sheet-nm color-chim">Chimeres</span>
<p class="scrollbar scrollbg-chim">[b]○ Prénom et Nom :[/b] ${data.identity}
[b]○ Age :[/b] ${data.ageP}
[b]○ Race :[/b] ${selectVal}
[b]○ Forme animale :[/b] ${data.forme}
[b]○ Métier :[/b] ${data.metier}</p></div>`;

const codeLook = `<div class='character-sheet-look scrollbar scrollbg-chim'>
<h5 class='post-subtitle-3 border-chim'>Cherche coiffeur (mort ou vif)</h5>
[b]- Grand ou petit ? Ou entre les deux ? [/b] ${data.size}

[b]- T’as des signes particuliers ?[/b] ${data.sign}

[b]- Décris-nous un peu ton style vestimentaire : [/b] ${data.clothes}

[b]- Y a-t-il un objet que tu portes toujours sur toi ?[/b] ${data.object}</div>`;

const codeStory = `<div class='character-sheet-story'><div class='character-sheet-inner border-chim scrollbar scrollbg-dark'><h5 class='post-subtitle-3'>Histoire [i](courte)[/i]</h5>
${data.story}</div></div></div>`;

const codeInterview = `<div class="character-sheet-avatar"><img src="${data.avatar}" alt="${data.identity}" /></div>
<div class="character-sheet-interview"><div class="character-sheet-inner scrollbar scrollbg-chim"><h5 class="post-subtitle-3 border-chim color-chim">Interview avec le Tout-Puissant</h5>
[b]- Tu pries tous les soirs ?[/b] ${data.q1}

[b]- T’aimes les animaux ?[/b] ${data.q2}

[b]- Ton pire souvenir, c’est… ?[/b] ${data.q3}

[b]- A quoi ressemble ton chez toi ?[/b] ${data.q4}

[b]- Une journée normale, pour toi, ça ressemble à quoi ?[/b] ${data.q5}

[b]- Ok, si tu pouvais devenir Tsar demain, qu’est-ce que tu ferais ?[/b] ${data.q6}</div></div>`;

  return ( 
    <Code codePassport={codePassport} codeInterview={codeInterview} codeLook={codeLook} codeStory={codeStory} />
    );
}
 
export default CodeChim;