

const strStr = (haystack,needle) => {
    //check if contains the letter
    if(!haystack.includes(needle)) return -1;
    //some edge cases
    if (needle.length === 0 || haystack.length === needle.length) return 0;
    //iterate the haystack (longer string)
    for(let i = 0; i< haystack.length; i++){

        /*
          string.substring(start index, end index -->not including end index)
          hello.substring(0,2) --> he
          
          so here, when start iterating, check if the starting index + the needle length === the actual word needle
        */
	  if(haystack.substring(i,needle.length + i) === needle) return i;
   }	
}

console.log(strStr('aaaaaaaa','baaa'))