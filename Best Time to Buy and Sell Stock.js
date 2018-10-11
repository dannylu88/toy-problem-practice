/*
O:number(maximum profit)
I:array of trades
C:N/A
E:[7,1,5,3,6,4]   --> 5, you buy when it's 1, and sell it at 6
   [7,6,4,3,1]   ---> you don't buy because you will lose money
*/


const testing = (prices) => {
	
	console.log(prices)
	//console.log(original)
	if(JSON.stringify(prices) === JSON.stringify([...prices].sort((a,b) => b-a))) return false;
	else return Math.max(...prices) - Math.min(...prices);
}
