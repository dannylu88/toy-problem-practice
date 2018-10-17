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


/*
solution without REGEX
*/
const isPalindrome = (s) => {
    //if there is only 1 letter, true 
    if(s.length < 2) return true;
    //helper function to filter out the punctation, special character,spaces etc
	const isValid = (char) => {
        //if they are not one of these
		if((char >= 'a' && char <='z') || (char >= '0' && char <= '9') || (char >='A' && char <='Z')) return true;
        //return false
        else return false;
	}
    
    //two pointer method to validate
    //i start from left
    let i = 0;
    //k start from right
	let k = s.length - 1;
    
    /*
     example: "A man, a plan, a canal: Panama"

     A tricky thing about the helper function + if statement,
     if it's not valid char, helper function return false, but ! in if statement,
     so if char NOT valid, we i++, if it's valid we go next step

     1. i = 0, k = last index
     2. s[0] = A, A valid = true, if statement = false, we go to else if
     3. we go check s[k], k valid = true, if statement = false, we go check else if
     4. A = a? yes, go next else if
     5. i++, k--

    1. i = 1; k = 2nd til last index
    2. s[1] = space, valid false, if statement = true, we done this loop i++
    3. s[2] = m, valid true, if statement = false, we move else if,
    4. s[k] = m, valid true, if statement = false, we move else if,
    5. m = m? yes, move to else
    6. i++, k--

    */

	while(i<=k){
        //move to next loop if anyone those fulfill
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

