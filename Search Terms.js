/*


*/

const keywords = ['hey', 'hi', 'hello']

const searchFunc = (array) => {
	let indice = []
	for(let i = 0; i < array.length; i++){
		if(array[i].includes(keywords)) indice.push(i);
	}
	return indice;
}

console.log(searchFunc(['hey', 'hi', 'hello', 'hey', 'greetings', 'salutations', 'hi', 'hello', 'hey']))