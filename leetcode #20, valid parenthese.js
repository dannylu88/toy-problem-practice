const isValid = (string) => {
	let smallCount = 0;
	let middleCount = 0;
	let bigCount = 0;

	
	for (let i = 0; i < string.length; i++){
		if (string[i] === '(') smallCount++;
		if (string[i] === '[') middleCount++;
		if (string[i] === '{') bigCount++;
		if (string[i] === ')') smallCount--;
		if (string[i] === ']') middleCount--;
		if (string[i] === '}') bigCount--;
		
		}
	
	if (smallCount === 0 && middleCount === 0 && bigCount === 0) return true;
	else return false;
}

console.log(isValid('([)]'))