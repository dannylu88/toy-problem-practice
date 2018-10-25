/*
O:indice of 2 element that add up to a specific sum, in an array
I:sorted array
C:non-zero base index, it's just regular index + 1
E:Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

//brutal force solution---> REALLY SLOW!!! 628ms, 0.95%
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

//two pointer method, one start from front, one start from the back
var twoSum = function(numbers, target) {
    i=0;
    j=numbers.length-1;
	
	//while i < j, which means before both pointer meet together
    while(i<j) {
		//find the sum
		sum = numbers[i]+numbers[j];
		//if sum = target, return the index (+1, cuz not using the default index)
        if (sum == target) {
		  return [i+1,j+1];  
		  //if sum > target, which means the right number is too big,
		  //move the right pointer to left, to get a smaller number
        } else if(sum > target) {
			j--;
			//if it's not anything else, which means sum < target,
			//whcih means sum is not big enough, so move the left pointer to right,
			//increase the sum
        } else {
           i++; 
        }
	}
	//if no found, return null
    return null;
};

//Binary Solution
var twoSum = function(nums, target) {
    function findNext(left, right, target, direction) {
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (direction > 0) {
            return left;
        } else {
            return right;
        }
    }
