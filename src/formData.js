import { v1 as uuidv1 } from 'uuid';

export const questionsGen = [
  {
    id : uuidv1(),
    category : 'choix-nm',
    label : '',
    type : 'radio',
    name: 'nm',
    choices : [
      {
        label : "Chimères",
        value : 'chim',   
      },
      {
        label : "Aventures du Passé",
        value : 'adp',   
      },
      {
        label : "X-Men",
        value : 'xmen',   
      },
      {
        label : "Zombieland",
        value : 'zomb',   
      },
      {
        label : "Alpha Perdu",
        value : 'ap',   
      }
    ]
  },
   {
    id : uuidv1(),
    category : 'general',
    label : 'Prénom',
    type : 'text',
    value : '',
    err : '',
    name : 'firstname',
    placeholder : ''
  },
  {
    id : uuidv1(),
    category : 'general',
    label : 'Âge',
    type : 'text',
    value : '',
    err : '',
    name : 'ageJ',
    placeholder : ''
  },
  {
    id : uuidv1(),
    category : 'general',
    label : 'Activités',
    type : 'text',
    value : '',
    err : '',
    name : 'activities',
    placeholder : "(ce que tu fais en ce moment, travail/étude...)"
  },
  {
    id : uuidv1(),
    category : 'general',
    label : "Centres d'intérêts",
    type : 'text',
    value : '',
    err : '',
    name : 'interest',
    placeholder : "(ce que tu fais en ce moment, travail/étude...)"
  },
  {
    id : uuidv1(),
    category : 'general',
    label : "Où j'ai trouvé le forum",
    type : 'textarea',
    value : '',
    err : '',
    name : 'find',
    placeholder : "(partenaire, top site, bouche à oreille...)"
  },
  {
    id : uuidv1(),
    category : 'general',
    label : 'Un petit mot pour Nano. ?',
    type : 'textarea',
    value : '',
    err : '',
    name : 'note',
    placeholder : ''
  },
  {
    id : uuidv1(),
    category : 'general',
    label : 'Activité à prévoir',
    type : 'textarea',
    value : '',
    err : '',
    name : 'presence',
    placeholder : "(combien de jours par semaine penses-tu être là ?)"
  },
  {
    id : uuidv1(),
    category : 'general',
    label : 'Bonus',
    type : 'textarea',
    value : '',
    err : '',
    name : 'bonus',
    placeholder : "(dis nous ce que tu veux !)"
  },
];

export const questionsNM = [
  {
    id : uuidv1(),
    category : 'passeport',
    nm: false,
    label : 'Prénom et Nom',
    name : 'identity',
    type : 'text',
    value : '',
    err : '',
    placeholder : ''
  },
  {
    id : uuidv1(),
    category : 'passeport',
    nm: false,
    label : 'Âge',
    name : 'ageP',
    type : 'text',
    value : '',
    err : '',
    placeholder : ''
  },
   {
    id : uuidv1(),
    category : 'passeport',
    nm: false,
    label : "Lien direct de l'avatar en 200*320px",
    name : 'avatar',
    type : 'url',
    value : '',
    err : '',
    placeholder : '(ex: http://....png)'
  },
  {
    id : uuidv1(),
    category : 'look',
    nm: false,
    label : "Grand ou petit ? Ou entre les deux ?",
    name : 'size',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ''
  },
  {
    id : uuidv1(),
    category : 'look',
    nm: false,
    label : "T’as des signes particuliers ?",
    name : 'sign',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : '(tatouages, piercings, cicatrices, tâches de naissance, etc.)'
  },
  {
    id : uuidv1(),
    category : 'look',
    nm: false,
    label : "Décris-nous un peu ton style vestimentaire",
    name : 'clothes',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ''
  },
  {
    id : uuidv1(),
    category : 'look',
    nm: false,
    label : "Y a-t-il un objet que tu portes toujours sur toi ?",
    name : 'object',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ''
  },
  {
    id : uuidv1(),
    category : 'story',
    nm: false,
    label : "",
    name : 'story',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ''
  },
];

const AP = [
  {
    id : uuidv1(),
    category : "passeport",
    nm : 'ap',
    label : 'Planète',
    name : 'planete',
    type : 'select',
    options : [
      {
        id : uuidv1(),
        label: "Galados",
        valuePlanet: "Galados",
		    optionGroup : "Système d'Umbar"
      },
      {
        id : uuidv1(),
        label: "Buu",
        valuePlanet: "Buu",
		    optionGroup : "Système d'Umbar"
      },
      {
        id : uuidv1(),
        label: "Keeshak",
        valuePlanet: "Keeshak",
		    optionGroup : "Système d'Umbar"
      },
	  {
        id : uuidv1(),
        label: "Abroa-Skai",
        valuePlanet: "Abroa-Skai",
		    optionGroup : "Système d'Astariul"
      },
	  {
        id : uuidv1(),
        label: "Celur",
        valuePlanet: "Celur",
		    optionGroup : "Système d'Astariul"
      },
	  {
        id : uuidv1(),
        label: "Phos'il",
        valuePlanet: "Phos'il",
		    optionGroup : "Système d'Astariul"
      },
	  {
        id : uuidv1(),
        label: "Dosth",
        valuePlanet: "Dosth",
		    optionGroup : "Système de Norys"
      },
	  {
        id : uuidv1(),
        label: "Manooine",
        valuePlanet: "Manooine",
		    optionGroup : "Système de Norys"
      },
    ],    
    placeholder : "",
    value : '',
    err : '',
  },
  {
    id : uuidv1(),
    category : 'passeport',
    nm : "ap",
    label : "Race",
    name : "race",
    type : 'text',
    value : '',
    err : '',
    placeholder : "Si t'es un mixe, oublie pas les inconvénients du mélange ;)"
  },
  {
    id : uuidv1(),
    category : 'passeport',
    nm : "ap",
    label : "Métier",
    name : "metier",
    type : 'text',
    value : '',
    err : '',
    placeholder : "mécano, soldat, marchand de chaussures volantes, pirate de l'espace, etc."
  },
  // Psychologie  
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "ap",
    label : 'Où te planques-tu ?',
    name : 'q1',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : "vaisseau, station orbitale, planète, etc."
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "ap",
    label : 'Tu joues au poker (si si) avec un poulpe violet, un Xzblorg, un tapis qui parle et un droïde à tête de canard. Qui est-ce que tu surveilles ?',
    name : 'q2',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "ap",
    label : "Dans les cantinas, qu'est-ce qu'on dit de toi ?",
    name : 'q3',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "ap",
    label : "Les lois, la politique, la Confédération du Commerce, l'écologie... t'en penses quoi de tout ça ?",
    name : 'q4',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "ap",
    label : 'Une journée normale, pour toi, ça ressemble à quoi ?',
    name : 'q5',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "ap",
    label : "Si tu trouves la planète Alpha, qu'est-ce que tu fais ?",
    name : 'q6',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
];
export const questionsAP = [...questionsNM, ...AP]

const ZOMB = [
  {
    id : uuidv1(),
    category : 'passeport',
    nm : "zomb",
    label : "Nationalité",
    name : "nationalite",
    type : 'text',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "passeport",
	  nm : "zomb",
    label : "Métier avant l'apocalypse",
    name : "metier",
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : 'passeport',
    nm : "zomb",
    label : "Lieu de vie",
    name : "lieu",
    type : 'text',
    value : '',
    err : '',
    placeholder : "au Camp ou ailleurs"
  },
  {
    id : uuidv1(),
    category : "passeport",
	  nm : "zomb",
    label : "Occupation actuelle",
    name : "occupation",
    type : 'textarea',
    value : '',
    err : '',
    placeholder : "Si présent au Camp : par exemple garde, préposé aux provisions, éclaireur, etc."
  },
  // Psychologie  
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "zomb",
    label : "Tu parles norvégien, c'bon ? Et anglais ?",
    name : 'q1',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "zomb",
    label : 'Si tu te faisais mordre, tu le dirais aux autres ?',
    name : 'q2',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "zomb",
    label : 'Tu as 9 zombies face à toi et tu es tout seul. À droite, un ravin, à gauche, une vieille grange en ruine. Tu as une batte de baseball. Tu fais quoi ?',
    name : 'q3',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "zomb",
    label : "Tu dois choisir : tu sauves la mamie, l'enfant ou l'humain super sexy qui te fait de l'œil ?",
    name : 'q4',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "zomb",
    label : 'Une journée normale, pour toi, ça ressemble à quoi ?',
    name : 'q5',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
    nm : "zomb",
    label : "C'est la fin du monde ou tu crois qu'un jour, tout redeviendra comme avant les zombies ?",
    name : 'q6',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
];
export const questionsZOMB = [...questionsNM, ...ZOMB]  

const XMEN = [
  {
    id : uuidv1(),
    category : 'passeport',
    nm : "xmen",
    label : "Nom de code",
    name : "code",
    type : 'text',
    value : '',
    err : '',
    placeholder : "(Facultatif)"
  },
  {
    id : uuidv1(),
    category : "passeport",
    nm : 'xmen',
    label : 'Race',
    name : 'race',
    type : 'select',
    options : [
      {
        id : uuidv1(),
        label: "Mutant",
        valueRace: "Mutant"
      },
      {
        id : uuidv1(),
        label: "Humain",
        valueRace: "Humain"
      },
    ],    
    placeholder : "",
    value : '',
    err : '',
  },
  {
    id : uuidv1(),
    category : "passeport",
    nm : 'xmen',
    label : 'Alignement',
    name : 'alignement',
    type : 'select',
    options : [
      {
        id : uuidv1(),
        label: "Magneto",
        valueAlign: "Magneto"
      },
      {
        id : uuidv1(),
        label: "Prof Xavier",
        valueAlign: "Prof Xavier"
      },
	  {
        id : uuidv1(),
        label: "LIRAH",
        valueAlign: "LIRAH"
      },
      {
        id : uuidv1(),
        label: "Mutant neutre",
        valueAlign: "Mutant neutre"
      },
	  {
        id : uuidv1(),
        label: "Humain lambda",
        valueAlign: "Humain lambda"
      },
    ],    
    placeholder : "",
    value : '',
    err : '',
  },
    {
    id : uuidv1(),
    category : 'passeport',
    nm : "xmen",
    label : "Métier",
    name : "metier",
    type : 'text',
    value : '',
    err : '',
    placeholder : "barista, journaliste, éboueur, étudiant, etc."
  }, 
  {
    id : uuidv1(),
    category : "passeport",
	  nm : "xmen",
    label : 'Mutation',
    name : 'mutation',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : "Si t'es mutant, une brève description pour la compréhension"
  },
  // Psychologie  
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "xmen",
    label : "T’as Facebook ? Twitter ? Tumblr ? T’es geek ?",
    name : 'q1',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "xmen",
    label : 'Ta famille est cool et fonctionnelle ?',
    name : 'q2',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "xmen",
    label : "C'est quoi tes passe-temps, dans la vie ?",
    name : 'q3',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "xmen",
    label : "Si tu pouvais passer dans le journal de 20h, qu'aurais-tu à dire ?",
    name : 'q4',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
    name : 'q5',
    label : 'Une journée normale, pour toi, ça ressemble à quoi ?',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "xmen",
    label : "Si tu pouvais devenir mutant (si t'es humain) ou humain (si t'es mutant), tu le ferais ?",
    name : 'q6',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
]; 
export const questionsXMEN = [...questionsNM, ...XMEN]

const ADP = [
  {
    id : uuidv1(),
    category : "passeport",
    nm : 'adp',
    label : 'Alignement',
    name : 'alignement',
    type : 'select',
    options : [
      {
        id : uuidv1(),
        label: "Bon",
        valueAlign: "bon"
      },
      {
        id : uuidv1(),
        label: "Neutre",
        valueAlign: "neutre"
      },
      {
        id : uuidv1(),
        label: "Mauvais",
        valueAlign: "mauvais"
      }
    ],    
    placeholder : "",
    value : '',
    err : '',
  },
  {
    id : uuidv1(),
    category : "passeport",
    nm : 'adp',
    label : "Race (bien se renseigner selon l'alignement choisis)",
    name : 'race',
    type : 'select',
    options : [
      {
        id : uuidv1(),
        label: "Dragon",
        valueRace: "Dragon",
		    optionGroup : "Si alignement Bon"
      },
      {
        id : uuidv1(),
        label: "Dragon-fée",
        valueRace: "Dragon-fée",
		    optionGroup : "Si alignement Bon"
      },
      {
        id : uuidv1(),
        label: "Elfe",
        valueRace: "Elfe",
		    optionGroup : "Si alignement Bon"
      },
      {
        id : uuidv1(),
        label: "Elfe noir",
        valueRace: "Elfe noir",
		    optionGroup : "Si alignement Mauvais"
      },
	  {
        id : uuidv1(),
        label: "Humain",
        valueRace: "Humain",
		    optionGroup : "Si alignement Bon"
      },
      {
        id : uuidv1(),
        label: "Nain",
        valueRace: "Nain",
		    optionGroup : "Si alignement Bon"
      },
	  {
        id : uuidv1(),
        label: "Orc",
        valueRace: "Orc",
		    optionGroup : "Si alignement Neutre"
      },
      {
        id : uuidv1(),
        label: "Gobelin",
        valueRace: "Gobelin",
		    optionGroup : "Si alignement Mauvais"
      },
    ],    
    placeholder : "Respecte bien ton choix d'alignement !",
    value : '',
    err : '',
  },
  {
    id : uuidv1(),
    category : "passeport",
    nm : 'adp',
    label : 'Classe',
    name : 'classe',
    type : 'select',
    options : [
      {
        id : uuidv1(),
        label: "Artisan",
        valueClass: "artisan"
      },
      {
        id : uuidv1(),
        label: "Artiste",
        valueClass: "artiste"
      },
      {
        id : uuidv1(),
        label: "Bien né",
        valueClass: "bien ne"
      },
	  {
        id : uuidv1(),
        label: "Chasseur",
        valueClass: "chasseur"
      },
      {
        id : uuidv1(),
        label: "Commerçant",
        valueClass: "commercant"
      },
      {
        id : uuidv1(),
        label: "Dragonnier",
        valueClass: "dragonnier"
      },
	  {
        id : uuidv1(),
        label: "Fureteur",
        valueClass: "fureteur"
      },
      {
        id : uuidv1(),
        label: "Guerrier",
        valueClass: "guerrier"
      },
      {
        id : uuidv1(),
        label: "Mage",
        valueClass: "mage"
      },
	  {
        id : uuidv1(),
        label: "Médecin",
        valueClass: "medecin"
      },
      {
        id : uuidv1(),
        label: "Petites gens",
        valueClass: "petites gens"
      },
    ],    
    placeholder : "",
    value : '',
    err : '',
  },
  {
    id : uuidv1(),
    category : 'passeport',
    nm : "adp",
    label : "Métier",
    name : "metier",
    type : 'text',
    value : '',
    err : '',
    placeholder : "Voir en fonction des classes"
  },
  // Psychologie  
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "adp",
    label : "Avoue. Y’a une race que t’aimes moins/plus que les autres !",
    name : 'q1',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "adp",
    label : "Un inconnu te propose un deal : tu te fais avoir, en général ? Ou c'est toi qui roules les autres ?",
    name : 'q2',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "adp",
    label : "Tu te retrouves face à trois trolls super vénères... Qu'est-ce que tu fais ?",
    name : 'q3',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "adp",
    label : "Où est-ce que tu dors le soir ? (Ou le matin. Ou l’après-midi. Tu dors, d'abord ?)",
    name : 'q4',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "adp",
    label : 'Une journée normale, pour toi, ça ressemble à quoi ?',
    name : 'q5',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "adp",
    label : "Si tu possédais le miroir de Guldin, qu'est-ce que tu en ferais ?",
    name : 'q6',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
];
export const questionsADP = [...questionsNM, ...ADP]

const CHIM = [
  {
    id : uuidv1(),
    category : "passeport",
    nm : 'chim',
    label : 'Race',
    name : 'race',
    type : 'select',
    options : [
      {
        id : uuidv1(),
        label: "Zootrope",
        valueRace: "Zootrope"
      },
      {
        id : uuidv1(),
        label: "Humain",
        valueRace: "Humain"
      },
      {
        id : uuidv1(),
        label: "Zootrope latent",
        valueRace: "Zootrope latent"
      }
    ],    
    placeholder : "à remplir si besoin",
    value : '',
    err : '',
  },
  {
    id : uuidv1(),
    category : "passeport",
	  nm : "chim",
    label : 'Forme animale',
    name : 'forme',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : "(si zootrope)"
  },
  {
    id : uuidv1(),
    category : 'passeport',
    nm  : "chim",
    label : "Métier",
    name : "metier",
    type : 'text',
    value : '',
    err : '',
    placeholder : "Milicien, Guide du Saint Ordre, boulanger, horloger, etc."
  },
  // Psychologie  
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "chim",
    label : "Tu pries tous les soirs ? ('Tention, Dieu surveille ta réponse…)",
    name : 'q1',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "chim",
    label : "T’aimes les animaux ? 8D",
    name : 'q2',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "chim",
    label : "Ton pire souvenir, c’est… ?",
    name : 'q3',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "chim",
    label : 'À quoi ressemble ton chez toi ?',
    name : 'q4',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "chim",
    label : 'Une journée normale, pour toi, ça ressemble à quoi ?',
    name : 'q5',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
	  nm : "chim",
    label : "Ok, si tu pouvais devenir Tsar demain, qu’est-ce que tu ferais ?",
    name : 'q6',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
];
export const questionsCHIM = [...questionsNM, ...CHIM]

export const formCategories = {
  catGen : {
    id : "general",
    title : "Commencons par toi p'tit joueur !"
  },
  catChoice : {
    id : "choix-nm",
    title : "Ensuite choisis ton Nano. Monde"
  },
  catPassport : {
    id : "passeport",
    title : "Passeport SVP !",
    'nm' : 'adp'
  },
  catLook : {
    id : "look",
    title : "Ce que ne montre pas l'avatar de ton perso"
  },
  catCaractere : {
     id : "caractere",
    title : "Quelques questions de nanopsy",
    'nm' : 'adp'
  },
  catStory : {
     id : "story",
    title : "Maintenant tu peux nous raconter ta vie"
  },
};

// formData[general].name => nm
// formData[general].value[2] => brux