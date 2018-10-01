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

/*
solution, a one liner using filter
*/
const removeElement = (nums,val) => {
	return nums.filter(number => number !==val)
}

/*
solution using for loop
*/

const removeElement = (nums,val) => {
	for(let i = 0; i < nums.length; i++){
		if(nums[i]===val) nums.splice(i,1)
	}
	return nums
}

console.log(removeElement([3,2,2,3],3))


/*
foreach solution

*/
const removeElement = (nums,val) => {
	nums.forEach((number,index) => {
		if(number === val) {
			nums.splice(index,1)
		}
	});
	return nums;
}
