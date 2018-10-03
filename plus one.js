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

/*
the solution below handle edge cases

[9,9] --> [1,0,0]
[9] --> [1,0]

using the 1st solution, it pop the last one then add one, push back to array,
will become [9,10], or [10]

*/

const plusOne = (digits) =>{
    //iterate from the end of the array
	for(let i = digits.length - 1; i>=0; i--){
        //if it's less than 9, 8+1 =9 , 7+1=8, they are fine, we don't need to touch the numbers at the front
		if(digits[i] < 9){
            //add one
            digits[i]++;
            //return the entire array
			return digits;
        }
        //if it is = 9, then add 1 will be 10, so set the last one to be 0
        //the loop will continue, to find the previous number that is not a 9, then add 1 in front
		digits[i] = 0
    }
    //the above will handle [2,9,9]  --> [3,0,0] because it will find the number in front of 9,9 then add 1 become 3
    //however, for [9,9] or [9,9,9], there is no number in front of 9,9
    //so when the for loop ends, and it reaches the front, if no number found,
    //we add a one in front to make it [1,0,0] and [1,0,0,0]
    return [1,...digits]
    
    /*
     spread operator

     1. replace apply:
        function myFunction(x, y, z) { }
        var args = [0, 1, 2];
        myFunction.apply(null, args);

        function myFunction(x, y, z) { }
        var args = [0, 1, 2];
        myFunction(...args);


      2. insert into array
      var parts = ['shoulders', 'knees']; 
        var lyrics = ['head', ...parts, 'and', 'toes']; 
        // ["head", "shoulders", "knees", "and", "toes"]

      3. copy array
      var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4); 

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected

    4.concat array
    var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]
    */
}


console.log(plusOne([1,2,4]))

