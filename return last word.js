/*
general solution, but cannot handle weird cases like ' a ' or 'a '
should return length of 1 because 'a' is a word, but return 0

*/

const lengthOfLastWord = (string) =>{
	if(string[string.length - 1] === ' ') return 0;
	if(string.length === 1) return string.length;
	let array = string.split(' ');
	let lastWord = array[array.length - 1];
	return lastWord.length
}


console.log(lengthOfLastWord('a'))

