const longestCommonPrefix = (strs) => {
	let result = '';
	
	const input = strs;
	
	const firstWord = input.shift();
	
	let index = 0;
	let indexVal = '';
	
	while(true){
		indexVal = firstWord.charAt(index);
		
		if(indexVal === '' || !input.every(words => indexVal === words.charAt(index))){
			break;
		}
		
		else{
			result = result.concat(indexVal);
		
		index++;
		}
	}
	return result;
}

console.log(longestCommonPrefix(['hello','hi','oewao']))



//var test = ['hello'];

//console.log(test[0][9]) --> undefined
//console.log(test[0].charAt(4)) --> ''

//console.log(!true) --> false