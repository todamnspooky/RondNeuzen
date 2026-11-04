// ============================================================================
// ALFABET & KLANKEN DATABANK - RONDNEUZEN.NL
// Gebaseerd op de officiële Nederlandse SLO-leerlijnen voor groep 3 en 4
// ============================================================================

// 1. HET STANDAARD ALFABET (26 losse letters a t/m z)
const alfabetBank = Object.freeze([
  Object.freeze({ teken: 'a', categorie: 'klinker', type: 'korte-klank' }),
  Object.freeze({ teken: 'b', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'c', categorie: 'medeklinker', type: 'speciale-klank' }), // Klinkt als /k/ of /s/
  Object.freeze({ teken: 'd', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'e', categorie: 'klinker', type: 'korte-klank' }),
  Object.freeze({ teken: 'f', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'g', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'h', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'i', categorie: 'klinker', type: 'korte-klank' }),
  Object.freeze({ teken: 'j', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'k', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'l', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'm', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'n', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'o', categorie: 'klinker', type: 'korte-klank' }),
  Object.freeze({ teken: 'p', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'q', categorie: 'medeklinker', type: 'speciale-klank' }), // Altijd met u
  Object.freeze({ teken: 'r', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 's', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 't', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'u', categorie: 'klinker', type: 'korte-klank' }),
  Object.freeze({ teken: 'v', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'w', categorie: 'medeklinker', type: 'medeklinker' }),
  Object.freeze({ teken: 'x', categorie: 'medeklinker', type: 'speciale-klank' }), // Klinkt als /ks/
  Object.freeze({ teken: 'y', categorie: 'klinker', type: 'speciale-klank' }),    // Zowel klinker als medeklinker
  Object.freeze({ teken: 'z', categorie: 'medeklinker', type: 'medeklinker' })
]);

// 2. DE COMPLETE SLO KLANKENBANK (Groep 3 & 4)
const klankenBank = Object.freeze([
  // Korte klanken (klinkers - groep 3)
  Object.freeze({ teken: 'a', categorie: 'klinker', type: 'korte-klank', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'e', categorie: 'klinker', type: 'korte-klank', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'i', categorie: 'klinker', type: 'korte-klank', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'o', categorie: 'klinker', type: 'korte-klank', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'u', categorie: 'klinker', type: 'korte-klank', aantalLetters: 1, groep: 3 }),

  // Lange klanken (klinkers - groep 3)
  Object.freeze({ teken: 'aa', categorie: 'klinker', type: 'lange-klank', aantalLetters: 2, groep: 3 }),
  Object.freeze({ teken: 'ee', categorie: 'klinker', type: 'lange-klank', aantalLetters: 2, groep: 3 }),
  Object.freeze({ teken: 'oo', categorie: 'klinker', type: 'lange-klank', aantalLetters: 2, groep: 3 }),
  Object.freeze({ teken: 'uu', categorie: 'klinker', type: 'lange-klank', aantalLetters: 2, groep: 3 }),

  // Tweetekenklanken (klinkers - groep 3)
  Object.freeze({ teken: 'oe', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, groep: 3 }),
  Object.freeze({ teken: 'ui', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, groep: 3 }),
  Object.freeze({ teken: 'ie', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, groep: 3 }),
  Object.freeze({ teken: 'eu', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, groep: 3 }),
  Object.freeze({ teken: 'ei', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, groep: 3 }),
  Object.freeze({ teken: 'ij', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, groep: 3 }),
  Object.freeze({ teken: 'au', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, groep: 3 }),
  Object.freeze({ teken: 'ou', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, groep: 3 }),

  // Meertekenklanken (drie- en viertekenklanken - groep 3 & 4)
  Object.freeze({ teken: 'aai', categorie: 'klinker', type: 'meertekenklank', aantalLetters: 3, groep: 3 }),
  Object.freeze({ teken: 'ooi', categorie: 'klinker', type: 'meertekenklank', aantalLetters: 3, groep: 3 }),
  Object.freeze({ teken: 'oei', categorie: 'klinker', type: 'meertekenklank', aantalLetters: 3, groep: 3 }),
  Object.freeze({ teken: 'eeuw', categorie: 'klinker', type: 'meertekenklank', aantalLetters: 4, groep: 4 }),
  Object.freeze({ teken: 'ieuw', categorie: 'klinker', type: 'meertekenklank', aantalLetters: 4, groep: 4 }),

  // Speciale minder gebruikelijke klinkerklanken (groep 4)
  Object.freeze({ teken: 'ai', categorie: 'klinker', type: 'speciale-klank', aantalLetters: 2, groep: 4 }),
  Object.freeze({ teken: 'oi', categorie: 'klinker', type: 'speciale-klank', aantalLetters: 2, groep: 4 }),
  Object.freeze({ teken: 'uw', categorie: 'klinker', type: 'speciale-klank', aantalLetters: 2, groep: 4 }),

  // Enkele medeklinkers (groep 3)
  Object.freeze({ teken: 'b', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'd', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'f', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'g', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'h', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'j', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'k', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'l', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'm', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'n', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'p', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'r', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 's', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 't', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'v', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'w', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),
  Object.freeze({ teken: 'z', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1, groep: 3 }),

  // Medeklinkercombinaties (2 letters die samen 1 klank vormen - groep 3)
  Object.freeze({ teken: 'ch', categorie: 'medeklinker', type: 'medeklinkercombinatie', aantalLetters: 2, aantalKlanken: 1, groep: 3 }),
  Object.freeze({ teken: 'ng', categorie: 'medeklinker', type: 'medeklinkercombinatie', aantalLetters: 2, aantalKlanken: 1, groep: 3 }),

  // Medeklinkerclusters (letters die samen meerdere klanken vormen - groep 3 & 4)
  Object.freeze({ teken: 'nk', categorie: 'medeklinker', type: 'medeklinkercluster', aantalLetters: 2, aantalKlanken: 2, groep: 3 }),
  Object.freeze({ teken: 'sch', categorie: 'medeklinker', type: 'medeklinkercluster', aantalLetters: 3, aantalKlanken: 2, groep: 3 }),

  // Speciale / leenwoord-medeklinkers (groep 4)
  Object.freeze({ teken: 'c', categorie: 'medeklinker', type: 'speciale-klank', aantalLetters: 1, groep: 4 }),
  Object.freeze({ teken: 'q', categorie: 'medeklinker', type: 'speciale-klank', aantalLetters: 1, groep: 4 }),
  Object.freeze({ teken: 'x', categorie: 'medeklinker', type: 'speciale-klank', aantalLetters: 1, groep: 4 }),
  Object.freeze({ teken: 'y', categorie: 'klinker', type: 'speciale-klank', aantalLetters: 1, groep: 4 })
]);
