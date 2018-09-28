
/*
    the below solution doesn't work because it cannot check input like this
    '([)]', because it only check the count, it has two () and [] so it will pass,
    but that should be a false
*/
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


/*
below is a working solution using stack

*/

const isValid = (string) => {
	let storage = [];
	
	for (let i = 0; i < string.length; i++){
		if(string[i] === '(' || string[i] === '[' || string[i] === '{') storage.push(string[i]);
		else if (string[i] === ')' && storage[storage.length - 1] === '(') {
			storage.pop();
		}
		else if (string[i] === ']' && storage[storage.length - 1] === '[') {
			storage.pop();
		}
		else if (string[i] === '}' && storage[storage.length - 1] === '{') {
			storage.pop();
		}
		else return false;
	}
	if(storage.length === 0) return true;
	else return false;
}

console.log(isValid(']'))