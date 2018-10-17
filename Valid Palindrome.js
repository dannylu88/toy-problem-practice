/*
O:Boolean
I:String (including puncutation, number, etc
C: only consider characters, ignore cases, and empty string is valid
E: 
Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false

*/

/*
there is a better solution using REGEX
*/
const isPalindrome = (s) => {
	if(s.length < 2) return true;
	const isValid = (char) => {
		if((char >= 'a' && char <='z') || (char >= '0' && char <= '9') || (char >='A' && char <='Z')) return true;
		else return false;
	}
	
	let i = 0;
	let k = s.length - 1;
	
	while(i<=k){
		if(!isValid(s[i])) i++;
		else if(!isValid(s[k])) k--;
		else if(s[i].toLowerCase() !== s[k].toLowerCase()) return false;
		else {
			i++;
			k--;
		}
	}
	return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"))

