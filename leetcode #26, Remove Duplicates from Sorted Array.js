
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


/*
the following solution has a contraint of ONLY MODIFY original array,
CANNOT create new variable to store numbers

*/

const removeDuplicates = (nums) => {
  /*
   example: [1,1,3,3,4,5,5,5,5,5,5,6,7,8]
    1. compare 1 to 1, index 1 to index 0
    2. they are the same, so splice(index,1) means remove 1 element starting from index
    3. now the index-->i, which is 1, so remove at index 1 will remove 1, but this will create problem 
       What problem?? the index will be a mess, assume we use nums.splice(i, 1)
        1) after 1st round, splice (1,1), input is [1,3,3,4,5,5,5,5,5,5,6,7,8]
        2) 2nd round, now i is 2, index at 2 is 3, so does 3 = 3? yes, then remove index at 2, which is 3
        3) this is fine, so the input is [1,3,4,5,5,5,5,5,5,6,7,8]
        4) 3rd round, now i is 3, index at 3 is 5, is 5 = 4? no, go ahead
        5) 4th round, now i is 4, index at 4 is 5, is 5 =5 ? yes, splice(4,1)
        6) now the input is [1,3,4,5,5,5,5,5,6,7,8]
        7) 5th round, now is is 5, index at 5 is 5, but index 3,4 is also 5, the program will skip some numbers
        8) so it's not fine, using i will skip numbers because we keep removing and index doesn't get decrease
    4. so we need to fix this, by also changing the index (index need to -1 too) whenever it matches,
       so splice(i--,1) will work  -> this will decrease index by 1 whenever we remove an element
  */
	for(let i = 1; i < nums.length; i++){
		if(nums[i] === nums[i-1]){
			nums.splice(i--,1)
		}
	}
	return nums;
}


console.log(removeDuplicates([1,1,3,3,4,4,5,5,5,5,5,5,5,6,7,8]))