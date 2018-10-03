/*
O:new array of digits
I:array of digits
C:N/A
E:[1,2,3]  --> [1,2,4]
  [4,3,2,2]  --> [4,3,2,3]

*/

const plusOne = (digits) =>{
	//read the last element of array
	let lastDigit = digits[digits.length - 1] + 1
	//console.log(lastDigit)
	//store that element and add 1 to it
	digits.pop();  //or digits.splice(-1,1) splice(index, how many el)
	//add the new element at the end of array
	digits.push(lastDigit)
	return digits;
}


console.log(plusOne([1,2,4]))

