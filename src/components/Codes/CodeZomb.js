import React from 'react';
import { useFormContext } from 'react-hook-form';
import Code from './Code';

const CodeZomb = () => {
  const { getValues } = useFormContext();
  const data = getValues();
  

const codePassport = `<div class="character-sheet"><h4 class="character-sheet-name" style="background-image: url(https://raw.githubusercontent.com/Skalleface/images-hosting/master/NRP/V9/ban_zombie.jpg)"><span>${data.identity}</span></h4>
<div class="character-sheet-passeport"><span class="character-sheet-nm color-zombie">Zombieland</span>
<p class="scrollbar scrollbg-zombie">[b]○ Prénom et Nom :[/b] ${data.identity}
[b]○ Age :[/b] ${data.ageP}
[b]○ Nationalité :[/b] ${data.nationalite}
[b]○ Métier avant l'apocalypse :[/b] ${data.metier}
[b]○ Lieu de vie :[/b] ${data.lieu}
[b]○ Occupation :[/b] ${data.occupation}</p></div>`;

const codeLook = `<div class='character-sheet-look scrollbar scrollbg--zombie'>
<h5 class='post-subtitle-3 border--zombie'>Cherche coiffeur (mort ou vif)</h5>
[b]- Grand ou petit ? Ou entre les deux ? [/b] ${data.size}

[b]- T’as des signes particuliers ?[/b] ${data.sign}

[b]- Décris-nous un peu ton style vestimentaire : [/b] ${data.clothes}

[b]- Y a-t-il un objet que tu portes toujours sur toi ?[/b] ${data.object}</div>`;

const codeStory = `<div class='character-sheet-story'><div class='character-sheet-inner border--zombie scrollbar scrollbg-dark'><h5 class='post-subtitle-3'>Histoire [i](courte)[/i]</h5>
${data.story}</div></div></div>`;

const codeInterview = `<div class="character-sheet-avatar"><img src="${data.avatar}" alt="${data.identity}" /></div>
<div class="character-sheet-interview"><div class="character-sheet-inner scrollbar scrollbg-zombie"><h5 class="post-subtitle-3 border-zombie color-zombie">Interview avec un zombie intello</h5>
[b]- Tu parles norvégien, c'bon ? Et anglais ?[/b] ${data.q1}

[b]- Si tu te faisais mordre, tu le dirais aux autres ?[/b] ${data.q2}

[b]- Tu as 9 zombies face à toi et tu es tout seul. A droite, un ravin, à gauche, une vieille grange en ruine. Tu as une batte de baseball. Tu fais quoi ?[/b] ${data.q3}

[b]- Tu dois choisir : tu sauves la mamie, l'enfant ou l'humanoïde super sexy qui te fait de l'œil ?[/b] ${data.q4}

[b]- Une journée normale, pour toi, ça ressemble à quoi ?[/b] ${data.q5}

[b]- C'est la fin du monde ou tu crois qu'un jour, tout redeviendra comme avant les zombies ?[/b] ${data.q6}</div></div>`;

  return ( 
    <Code codePassport={codePassport} codeInterview={codeInterview} codeLook={codeLook} codeStory={codeStory} />
    );
}
 
export default CodeZomb;