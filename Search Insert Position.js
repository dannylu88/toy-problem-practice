

const searchInsert = (nums, target) => {
	let resultIndex = nums.indexOf(target);
	//console.log(resultIndex)
	if (resultIndex == -1) {
		let i = 0;
		for(; target > nums[i]; i++){
			//do nothing, we just want i to increase till it's bigger than the num in array
		}
		//set index = what we want
		resultIndex = i;
	} 
	return resultIndex;
}

console.log(searchInsert([1,3,4,5],2)) // --> answer = 1, where 2 will be inserted