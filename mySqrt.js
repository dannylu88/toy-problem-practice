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

