
/*
the below solution need to create a new array

*/

const removeDuplicates = (nums) => {
	let input =[];
	for(let i = 0; i < nums.length; i++){
		if (!input.includes(nums[i])){
			input.push(nums[i])
		}
	}
	return input;
}


console.log(removeDuplicates([1,1,3,3,4,4,5,5,5,5,5,5,5,6,7,8]))