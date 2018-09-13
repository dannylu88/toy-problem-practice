/*
O:String
I:Array of String
C:N/A
E:['flower','flowew','flwqeqweqew'] -> 'fl'
  ['hihi','flower','ewqeq'] -> ''
*/


const longestCommonPrefix = (strs) => {
	//assume no match
	let result = '';
	//if input is empty return ''
  if(!strs || strs.length === 0) return result;

  //make copy of input
	const input = strs;
  
  //get the 1st word in the array
	const firstWord = input.shift();
  
  //set index = 0, and index val
	let index = 0;
	let indexVal = '';
  
  //here the loop will keep going
	while(true){

    //set indexVal based on index number 
    //example: firstword = 'flower', indexVal = flower.charAt(0) --> 'f'
		indexVal = firstWord.charAt(index);
    
    //if the next indexVal is empty, which means we finish iterate the 1st word, end loop
    //OR
    /*
      input.every(...) will check all the words in an array, check them if they pass the test inside
      so the test here would be indexVal === charAt(index),
      example: word = 'flower' and 'flwewewe', and now we check the 1st letter,
               is 'f' === 'f'? yes! then every will return true,
               however, if we return true in the if statement, the loop will break, so we want to add '!' in front
               so the loop can continue;

               same thing for 'l'

               is 'o' === 'w'? no! so every will return false, but we want the loop to end right now,
               the ! will change false to true, so the loop ends

    */
		if(indexVal === '' || !input.every(words => indexVal === words.charAt(index))){
			break;
		}
    
    //console.log('hi'.concat('s')) --> his
    //if the above test pass that means all the words has this letter,
    //so we add that letter to our result
		else{
			result = result.concat(indexVal);
		
		index++;
		}
	}
	return result;
}

console.log(longestCommonPrefix(['hello','hi','oewao']))





//var test = ['hello'];

//console.log(test[0][9]) --> undefined
//console.log(test[0].charAt(9)) --> ''

//console.log(!true) --> false
//added for commit