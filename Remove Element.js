/*
this solution doesn't meet the constraint, where cannot create new var to store

*/
const removeElement = (nums,val) => {
	let result = [];
	for(let i = 0; i < nums.length; i++){
		if (nums[i] !== val){
			result.push(nums[i])
		}
	}
	return result;
}

console.log(removeElement([3,2,2,3],3)) // ---> will be 2, filter all 3

