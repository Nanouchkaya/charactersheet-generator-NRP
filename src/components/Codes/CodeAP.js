import React from 'react';
import { useFormContext } from 'react-hook-form';
import Code from './Code';

const CodeAP = () => {
  const { getValues } = useFormContext();
  const data = getValues();
  const selectVal = data.planet ? data.planet.label : '';

const codePassport = `<div class='character-sheet'><h4 class='character-sheet-name' style='background-image: url(https://raw.githubusercontent.com/Skalleface/images-hosting/master/NRP/V9/ban_ap.jpg)'><span>${data.identity}</span></h4>
<div class='character-sheet-passeport'><span class='character-sheet-nm color-ap'>Alpha Perdu</span>
<p class='scrollbar scrollbg-ap'>[b]○ Prénom et Nom :[/b] ${data.identity}
[b]○ Age :[/b] ${data.ageP}
[b]○ Race :[/b] ${data.race}
[b]○ Planète :[/b] ${selectVal}
[b]○ Métier :[/b] ${data.metier}</p></div>`;

const codeLook = `<div class='character-sheet-look scrollbar scrollbg-ap'>
<h5 class='post-subtitle-3 border-ap'>Cherche coiffeur (mort ou vif)</h5>
[b]- Grand ou petit ? Ou entre les deux ? [/b] ${data.size}

[b]- T’as des signes particuliers ?[/b] ${data.sign}

[b]- Décris-nous un peu ton style vestimentaire : [/b] ${data.clothes}

[b]- Y a-t-il un objet que tu portes toujours sur toi ?[/b] ${data.object}</div>`;

const codeStory = `<div class='character-sheet-story'><div class='character-sheet-inner border-ap scrollbar scrollbg-dark'><h5 class='post-subtitle-3'>Histoire [i](courte)[/i]</h5>
${data.story}</div></div></div>`;

const codeInterview = `<div class='character-sheet-avatar'><img src='${data.avatar}' alt='${data.identity}' /></div>
<div class='character-sheet-interview'><div class='character-sheet-inner scrollbar scrollbg-ap'><h5 class='post-subtitle-3 border-ap color-ap'>Interview avec un poulple</h5>
[b]- Où te planques-tu ? (vaisseau, station orbitale, planète, etc.)[/b] ${data.q1}

[b]- Tu joues au poker (si si) avec un poulpe violet, un Xzblorg, un tapis qui parle et un droïde à tête de canard. Qui est-ce que tu surveilles ?[/b] ${data.q2}

[b]- Dans les cantinas, qu'est-ce qu'on dit de toi ?[/b] ${data.q3}

[b]- Les lois, la politique, la Confédération du Commerce, l'écologie... t'en penses quoi de tout ça ?[/b] ${data.q4}

[b]- Une journée normale, pour toi, ça ressemble à quoi ?[/b] ${data.q5}

[b]- Si tu trouves la planète Alpha, qu'est-ce que tu fais ?[/b] ${data.q6}</div></div>`;
  
  return ( 
    <Code codePassport={codePassport} codeInterview={codeInterview} codeLook={codeLook} codeStory={codeStory} />
    );
}
 
export default CodeAP;