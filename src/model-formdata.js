/*
  - valeur de LABEL : texte libre, c'est la question
  - valeur de NM : 'ap' ou 'zomb' ou 'adp' ou 'xmen'
  - valeur de placeholder :  texte libre, facultatif, c'est si besoin de plus d'info
  - type : text / select / url / textarea
  - valeur de OPTIONS : si type = select alors la valeur est un tableau d'objet avec 3 pairs clé/valeur (id, label, value). Les clés label et value ont les mêmes valeurs.
 */

const questionsAP = [
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
        value: "Galados",
		    optionGroup : "Système d'Umbar"
      },
      {
        id : uuidv1(),
        label: "Buu",
        value: "Buu",
		    optionGroup : "Système d'Umbar"
      },
      {
        id : uuidv1(),
        label: "Keeshak",
        value: "Keeshak",
		    optionGroup : "Système d'Umbar"
      }
	  {
        id : uuidv1(),
        label: "Abroa-Skai",
        value: "Abroa-Skai",
		    optionGroup : "Système d'Astariul"
      },
	  {
        id : uuidv1(),
        label: "Celur",
        value: "Celur",
		    optionGroup : "Système d'Astariul"
      },
	  {
        id : uuidv1(),
        label: "Phos'il",
        value: "Phos'il",
		    optionGroup : "Système d'Astariul"
      },
	  {
        id : uuidv1(),
        label: "Dosth",
        value: "Dosth",
		    optionGroup : "Système de Norys"
      },
	  {
        id : uuidv1(),
        label: "Manooine",
        value: "Manooine",
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
    name : 'q1ap',
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
    name : 'q2ap',
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
    name : 'q3ap',
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
    name : 'q4ap',
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
    name : 'q5ap',
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
    name : 'q6ap',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
];
  
const questionsZOMB = [
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
    name : 'q1zomb',
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
    name : 'q2zomb',
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
    name : 'q3zomb',
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
    name : 'q4zomb',
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
    name : 'q5zomb',
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
    name : 'q6zomb',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
];
  
const questionsXMEN = [
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
        value: "Mutant"
      },
      {
        id : uuidv1(),
        label: "Humain",
        value: "Humain"
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
        value: "Magneto"
      },
      {
        id : uuidv1(),
        label: "Prof Xavier",
        value: "Prof Xavier"
      },
	  {
        id : uuidv1(),
        label: "LIRAH",
        value: "LIRAH"
      },
      {
        id : uuidv1(),
        label: "Mutant neutre",
        value: "Mutant neutre"
      },
	  {
        id : uuidv1(),
        label: "Humain lambda",
        value: "Humain lambda"
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
    name : 'q1xmen',
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
    name : 'q2xmen',
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
    name : 'q3xmen',
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
    name : 'q4xmen',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
  {
    id : uuidv1(),
    category : "caractere",
    name : 'q5xmen',
    label : 'Une journée normale, pour toi, ça ressemble à quoi ?',
    name : 'journee',
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
    name : 'q6xmen',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
]; 

const questionsADP = [
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
        value: "bon"
      },
      {
        id : uuidv1(),
        label: "Neutre",
        value: "neutre"
      },
      {
        id : uuidv1(),
        label: "Mauvais",
        value: "mauvais"
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
    label : 'Race',
    name : 'race',
    type : 'select',
    options : [
      {
        id : uuidv1(),
        label: "Dragon",
        value: "Dragon",
		    optionGroup : "Si alignement Bon"
      },
      {
        id : uuidv1(),
        label: "Dragon-fée",
        value: "Dragon-fée",
		    optionGroup : "Si alignement Bon"
      },
      {
        id : uuidv1(),
        label: "Elfe",
        value: "Elfe",
		    optionGroup : "Si alignement Bon"
      }
	  {
        id : uuidv1(),
        label: "Humain",
        value: "Humain",
		    optionGroup : "Si alignement Bon"
      },
      {
        id : uuidv1(),
        label: "Nain",
        value: "Nain",
		    optionGroup : "Si alignement Bon"
      }
	  {
        id : uuidv1(),
        label: "Dragon",
        value: "Dragon",
		    optionGroup : "Si alignement Neutre"
      },
      {
        id : uuidv1(),
        label: "Dragon-fée",
        value: "Dragon-fée",
		    optionGroup : "Si alignement Neutre"
      },
      {
        id : uuidv1(),
        label: "Elfe",
        value: "Elfe",
		    optionGroup : "Si alignement Neutre"
      }
	  {
        id : uuidv1(),
        label: "Humain",
        value: "Humain",
		    optionGroup : "Si alignement Neutre"
      },
      {
        id : uuidv1(),
        label: "Nain",
        value: "Nain",
		    optionGroup : "Si alignement Neutre"
      }
	  {
        id : uuidv1(),
        label: "Orc",
        value: "Orc",
		    optionGroup : "Si alignement Neutre"
      }
	  {
        id : uuidv1(),
        label: "Dragon",
        value: "Dragon",
		    optionGroup : "Si alignement Mauvais"
      },
      {
        id : uuidv1(),
        label: "Gobelin",
        value: "Gobelin",
		    optionGroup : "Si alignement Mauvais"
      },
      {
        id : uuidv1(),
        label: "Elfe noir",
        value: "Elfe noir",
		    optionGroup : "Si alignement Mauvais"
      }
	  {
        id : uuidv1(),
        label: "Humain",
        value: "Humain",
		    optionGroup : "Si alignement Mauvais"
      },
      {
        id : uuidv1(),
        label: "Orc",
        value: "Orc",
		    optionGroup : "Si alignement Mauvais"
      }
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
        value: "artisan"
      },
      {
        id : uuidv1(),
        label: "Artiste",
        value: "artiste"
      },
      {
        id : uuidv1(),
        label: "Bien né",
        value: "bien ne"
      }
	  {
        id : uuidv1(),
        label: "Chasseur",
        value: "chasseur"
      },
      {
        id : uuidv1(),
        label: "Commerçant",
        value: "commercant"
      },
      {
        id : uuidv1(),
        label: "Dragonnier",
        value: "dragonnier"
      }
	  {
        id : uuidv1(),
        label: "Fureteur",
        value: "fureteur"
      },
      {
        id : uuidv1(),
        label: "Guerrier",
        value: "guerrier"
      },
      {
        id : uuidv1(),
        label: "Mage",
        value: "mage"
      }
	  {
        id : uuidv1(),
        label: "Médecin",
        value: "medecin"
      },
      {
        id : uuidv1(),
        label: "Petites gens",
        value: "petites gens"
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
    name : 'q1adp',
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
    name : 'q2adp',
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
    name : 'q3adp',
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
    name : 'q4adp',
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
    name : 'q5adp',
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
    name : 'q6adp',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
];

const questionsCHIM = [
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
        value: "Zootrope"
      },
      {
        id : uuidv1(),
        label: "Humain",
        value: "Humain"
      },
      {
        id : uuidv1(),
        label: "Zootrope latent",
        value: "Zootrope latent"
      }
    ],    
    placeholder : "",
    value : '',
    err : '',
  },
  {
    id : uuidv1(),
    category : "passeport",
	  nm : "chim",
    label : 'Forme animale',
    name : 'forme animale',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : "(si zootrope)"
  },
  {
    id : uuidv1(),
    category : 'passeport',
      : "chim",
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
    name : 'q1chim',
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
    name : 'q2chim',
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
    name : 'q3chim',
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
    name : 'q4chim',
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
    name : 'q5chim',
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
    name : 'q6chim',
    type : 'textarea',
    value : '',
    err : '',
    placeholder : ""
  },
];