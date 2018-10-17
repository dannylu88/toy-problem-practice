/*
O:number, the single number that never repeat
I:array of random intergers
C:linear run time, no extra memory
E:[2,2,1] -> 1;  [4,1,2,1,2] --> 4
  [1,2,2] --> 1
  [1,1,3,3,4,5,5]  -> 4
  [1,1,3,3,5] --> 5
*/

// sort number by order (this will change the original input)

// the number must meet two condition, 1. next number is not the same, 2.next next number also not the same
// the for loop will need to skip 2 index a time

const singleNumber = (nums) => {
	nums.sort((a,b) =>  a - b);
	for(let i = 0; i<nums.length; i = i + 2){
		if(nums[i] !== nums[i+1] && nums[i] !== nums[i+2]) return nums[i]
	}
}

console.log(singleNumber([2,2,3,5,5]))


// solution using index
// if the index of this number === the index of the same number but last occurance,
// return this number
var singleNumber = function(nums) {
    for(var i=0;i<nums.length;i++) {
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i];
    }
};