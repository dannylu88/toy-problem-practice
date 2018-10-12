/*
O:number(maximum profit), return 0 if no profitable trade can be made
I:array of trades
C:N/A
E:[7,1,5,3,6,4]   --> 5, you buy when it's 1, and sell it at 6
   [7,6,4,3,1]   ---> you don't buy because you will lose money
*/


const testing = (prices) => {
  //1.sort by descending order
  //2.if the original array is the same as the sorted by descending order
  //  that means the stock has been going down for the entire day so no trade
  //3. REMEMBER sort will change the original input,
  //   to use sort without changing the original, use [...array].sort()
  if(JSON.stringify(prices) === JSON.stringify([...prices].sort((a,b) => b-a))) return 0;

  //if not, return max - min
  //this DOESN'T work because you can only sell after you buy
  //now this solution will just find the largest difference, doesn't consider
  //the buy and sell situation
  else return Math.max(...prices) - Math.min(...prices);
}

var maxProfit = function(prices) {
    //assume the min price is the first one
    let minSoFar = prices[0];
    //assume the max profit is 0
    let maxProfitSoFar = 0;
    
    //iterate the array
    /*
     [7,1,5,3,6,4]
     1st Round:  assume 7 is min, max profit = 0
     2nd Round:  max(0, 1 - 7 = -6), still max profit = 0, min also update because 1 < 7
     3rd Ronud:  max(0, 5 - 1 =  4), new max profit = 4, min doesn't update because 5 > 1
     5th Round:  max (4, 6 - 1 = 5), new max profit = 5, min doesn't update
    */
    for(let i = 1; i < prices.length; i++){
        //keep updating the maxProfit while iterating the array
        //max (who is larger?) the original maxProfit? or the next element in array - min
        maxProfitSoFar = Math.max(maxProfitSoFar, prices[i] - minSoFar);
        //this will also update the min, which is smaller?
        //original min? or the next element in array?
        minSoFar = Math.min(minSoFar, prices[i]);
    }
    
    return maxProfitSoFar;
};