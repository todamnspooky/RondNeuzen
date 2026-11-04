// PRAKTISCHE LETTER- EN KLANKENBANK - RONDNEUZEN.NL

// 1. HET ALFABET (alle 26 losse letters van a t/m z)
const alfabetBank = Object.freeze([
  Object.freeze({ teken: 'a', categorie: 'klinker', type: 'klinkerletter' }),
  Object.freeze({ teken: 'b', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'c', categorie: 'medeklinker', type: 'bijzondere-letter' }),
  Object.freeze({ teken: 'd', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'e', categorie: 'klinker', type: 'klinkerletter' }),
  Object.freeze({ teken: 'f', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'g', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'h', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'i', categorie: 'klinker', type: 'klinkerletter' }),
  Object.freeze({ teken: 'j', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'k', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'l', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'm', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'n', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'o', categorie: 'klinker', type: 'klinkerletter' }),
  Object.freeze({ teken: 'p', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'q', categorie: 'medeklinker', type: 'bijzondere-letter' }),
  Object.freeze({ teken: 'r', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 's', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 't', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'u', categorie: 'klinker', type: 'klinkerletter' }),
  Object.freeze({ teken: 'v', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'w', categorie: 'medeklinker', type: 'medeklinkerletter' }),
  Object.freeze({ teken: 'x', categorie: 'medeklinker', type: 'bijzondere-letter' }),
  Object.freeze({ teken: 'y', categorie: 'wisselend', type: 'bijzondere-letter' }),
  Object.freeze({ teken: 'z', categorie: 'medeklinker', type: 'medeklinkerletter' })
]);

// 2. KLANKEN, LETTERCOMBINATIES EN SPELLINGPATRONEN
const klankenBank = Object.freeze([
  // Korte klanken
  Object.freeze({ teken: 'a', categorie: 'klinker', type: 'korte-klank', aantalLetters: 1 }),
  Object.freeze({ teken: 'e', categorie: 'klinker', type: 'korte-klank', aantalLetters: 1 }),
  Object.freeze({ teken: 'i', categorie: 'klinker', type: 'korte-klank', aantalLetters: 1 }),
  Object.freeze({ teken: 'o', categorie: 'klinker', type: 'korte-klank', aantalLetters: 1 }),
  Object.freeze({ teken: 'u', categorie: 'klinker', type: 'korte-klank', aantalLetters: 1 }),

  // Lange klanken
  Object.freeze({ teken: 'aa', categorie: 'klinker', type: 'lange-klank', aantalLetters: 2 }),
  Object.freeze({ teken: 'ee', categorie: 'klinker', type: 'lange-klank', aantalLetters: 2 }),
  Object.freeze({ teken: 'oo', categorie: 'klinker', type: 'lange-klank', aantalLetters: 2 }),
  Object.freeze({ teken: 'uu', categorie: 'klinker', type: 'lange-klank', aantalLetters: 2 }),

  // Tweetekenklanken (inclusief klankparen met gedeelde klankId)
  Object.freeze({ teken: 'oe', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2 }),
  Object.freeze({ teken: 'ui', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2 }),
  Object.freeze({ teken: 'ie', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2 }),
  Object.freeze({ teken: 'eu', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2 }),
  Object.freeze({ teken: 'ei', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, klankId: 'ei-ij' }),
  Object.freeze({ teken: 'ij', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, klankId: 'ei-ij' }),
  Object.freeze({ teken: 'au', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, klankId: 'au-ou' }),
  Object.freeze({ teken: 'ou', categorie: 'klinker', type: 'tweetekenklank', aantalLetters: 2, klankId: 'au-ou' }),

  // Meertekenklanken
  Object.freeze({ teken: 'aai', categorie: 'klinker', type: 'meertekenklank', aantalLetters: 3 }),
  Object.freeze({ teken: 'ooi', categorie: 'klinker', type: 'meertekenklank', aantalLetters: 3 }),
  Object.freeze({ teken: 'oei', categorie: 'klinker', type: 'meertekenklank', aantalLetters: 3 }),

  // Bijzondere klinkercombinaties
  Object.freeze({ teken: 'ai', categorie: 'klinker', type: 'bijzondere-klank', aantalLetters: 2 }),
  Object.freeze({ teken: 'oi', categorie: 'klinker', type: 'bijzondere-klank', aantalLetters: 2 }),

  // Vaste spellingpatronen (-eeuw, -ieuw, -uw)
  Object.freeze({ teken: 'eeuw', categorie: 'spellingpatroon', type: 'vast-spellingpatroon', aantalLetters: 4 }),
  Object.freeze({ teken: 'ieuw', categorie: 'spellingpatroon', type: 'vast-spellingpatroon', aantalLetters: 4 }),
  Object.freeze({ teken: 'uw', categorie: 'spellingpatroon', type: 'vast-spellingpatroon', aantalLetters: 2 }),

  // Eenduidige medeklinkers
  Object.freeze({ teken: 'b', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'd', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'f', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'g', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'h', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'j', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'k', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'l', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'm', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'n', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'p', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'r', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 's', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 't', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'v', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'w', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),
  Object.freeze({ teken: 'z', categorie: 'medeklinker', type: 'medeklinker', aantalLetters: 1 }),

  // Medeklinkercombinaties (meerdere letters voor één medeklinkerklank)
  Object.freeze({ teken: 'ch', categorie: 'medeklinker', type: 'medeklinkercombinatie', aantalLetters: 2 }),
  Object.freeze({ teken: 'ng', categorie: 'medeklinker', type: 'medeklinkercombinatie', aantalLetters: 2 }),

  // Gangbare medeklinkerclusters
  Object.freeze({ teken: 'nk', categorie: 'medeklinker', type: 'medeklinkercluster', aantalLetters: 2 }),
  Object.freeze({ teken: 'sch', categorie: 'medeklinker', type: 'medeklinkercluster', aantalLetters: 3 }),
  Object.freeze({ teken: 'cht', categorie: 'medeklinker', type: 'medeklinkercluster', aantalLetters: 3 })
]);
