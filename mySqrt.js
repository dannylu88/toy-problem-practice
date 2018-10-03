/*
O:Int
I:positive Int
C:N/A
E: 4 ---> 2
   8 ----> 2  (sqrt 8 = 2.xxxx), just keep the integer

*/


const mySqrt = (x) => {
    x = Number(x);
    //Math.trunc(42.213123221) ---> 42
	return Math.trunc(Math.pow(x,0.5))
}

console.log(mySqrt('5'))

/*
the below solution used Babylonian Method(equation)

keep doing this, will get the sqrt root
(guess + number/guess) * 0.5 = new guess,

then new guess become guess

*/


const mySqrt = (x,guess) => {
	if(x === 1 || x === 0) return x;
	//assume guess = 0.5 * number
	if(!guess) guess = x / 2;
	//Babylonian Method(equation)
	//(guess + number / guess)*0.5 = new guess
    let newGuess = (guess + x / guess) * 0.5;
    //if the guess and newGuess equal, that means it gets the cloest one
	if(guess === newGuess) return Math.floor(guess);
	return mySqrt(x,newGuess)
}

console.log(mySqrt('8'))

//console.log((5.2+27/5.2)*0.5)


