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

/*
O:length of the last word (string)
I:a long string with white space
C:N/A
E:'Hello World' --> '5'
  ' a ' ---> '1'

*/

const lengthOfLastWord = (s) =>{
    //get rid of the white space both end of the string
    let string = s.trim();
    //set default length = 0 (if no word, return 0)
    let length = 0;
    //we start from the back of the string
    //starting at the last letter, decrease 1 by 1, if i>=0, we keep going
	for(let i = string.length - 1; i >= 0; i--){
        //stop the loop til we find the first space
		if(string[i] === ' '){
			break;
        }
        //if no space, we keep the conut++
		else{
			length++;
		}
    }
    //return count
	return length;
}


console.log(lengthOfLastWord('hello world'))