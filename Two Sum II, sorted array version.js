/*
O:indice of 2 element that add up to a specific sum, in an array
I:sorted array
C:non-zero base index, it's just regular index + 1
E:Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

//brutal force solution---> REALLY SLOW!!! 628ms
const twoSum = (numbers, target) => {
	let indice = [];
	for(let i = 0; i < numbers.length; i++){
		for(let j = 1; j < numbers.length; j++){
			if(i===j) continue;
			if(numbers[i] + numbers[j] === target) {
				indice.push(i+1);
				indice.push(j+1);
				return indice;
			}
		}
	}
}

console.log(twoSum([1,2,3,4,4,9,56,90],8))