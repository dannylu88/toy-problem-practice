const strStr = (haystack,needle) => {
	if (needle.length === 0) return 0;
	if(!haystack.includes(needle)) return -1;
  for(let i = 0; i< haystack.length - needle.length; i++){
	  if(haystack.substring(i,needle.length + i) === needle) return i;
   }	
}

console.log(strStr('hello','ll'))