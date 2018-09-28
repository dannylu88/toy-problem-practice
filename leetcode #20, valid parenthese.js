
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

example: '([])'

1. store ( and [ because they both match           storage: ([
2. see ], make sure the last one storage is [      storage: ([
3. ok it's [, pop [                                storage: (
4. see ), check the last one is (
5. ok it's (, pop (                                sotrage: empty



*/

const isValid = (string) => {
    //created storage variable
	let storage = [];
    
    //iterate the entire string
	for (let i = 0; i < string.length; i++){

        //push into stroage if '(' or '[' or '{'
        if(string[i] === '(' || string[i] === '[' || string[i] === '{') storage.push(string[i]);
        
        //if see ')', and in storage, the last one has to be '('
		else if (string[i] === ')' && storage[storage.length - 1] === '(') {
			storage.pop();
		}
		else if (string[i] === ']' && storage[storage.length - 1] === '[') {
			storage.pop();
		}
		else if (string[i] === '}' && storage[storage.length - 1] === '{') {
			storage.pop();
        }
        
        //since the string only contain () [] {}, if it's not (, [, {
        //like just ']', it will go straight to false because you can never start with ) ] }
		else return false;
	}
	if(storage.length === 0) return true;
	else return false;
}

console.log(isValid(']'))