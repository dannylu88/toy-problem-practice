
/*
the below solution need to create a new array

*/

const removeDuplicates = (nums) => {
	//create new var to store result
  let result =[];
  //iterate the for loop
	for(let i = 0; i < nums.length; i++){
    //if the result doesn't already have the number, push it in and store it
		if (!result.includes(nums[i])){
			result.push(nums[i])
		}
	}
	return result;
}


console.log(removeDuplicates([1,1,3,3,4,4,5,5,5,5,5,5,5,6,7,8])) // --> [1,3,4,5,6,7,8]