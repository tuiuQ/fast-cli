export const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
export const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const digits = "0123456789";
export const punctuation = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
export const controlCharacters = ` \t\n\r`;

export const portugueseLowercaseLetters = "áàãâäåéèêëíìîïóòõôöúùûüçñýÿ";
export const portugueseUppercaseLetters = "ÁÀÃÂÄÅÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÇÑÝŸ";

export const ptExtra = "áàãâäåéèêëíìîïóòõôöúùûüçñýÿÁÀÃÂÄÅÉÈÊËÍÌÎÏÓÒÕÔÖÚÙÛÜÇÑÝŸ";
export const esExtra = "áéíóúüñÁÉÍÓÚÜÑ¡¿";
export const idExtra = "";

export const charsetMap = {
	en: `${lowercaseLetters}${uppercaseLetters}${digits}${punctuation}${controlCharacters}`,
	pt: `${lowercaseLetters}${uppercaseLetters}${digits}${punctuation}${controlCharacters}${ptExtra}`,
	es: `${lowercaseLetters}${uppercaseLetters}${digits}${punctuation}${controlCharacters}${ptExtra}${esExtra}`,
	id: `${lowercaseLetters}${uppercaseLetters}${digits}${punctuation}${controlCharacters}${idExtra}`,
};
