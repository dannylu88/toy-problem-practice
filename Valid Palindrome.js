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

var isPalindrome = function(s) {
    if (s.length < 2) return true;
    
    const isCharValid = char => {
      return (char >= 'a' && char <= 'z'
         || char >= 'A' && char <= 'Z'
         || char >= '0' && char <= '9');
    };
        
    let i=0;
    let k=s.length-1;
    while (i<=k) {
        if (!isCharValid(s[i])) {
            i++;
        }
        else if (!isCharValid(s[k])) {
            k--;  
        } 
        else if (s[i].toLowerCase() != s[k].toLowerCase()) {
            return false;
        } else {
            i++;
            k--;
        }
    }
    
    return true;
};