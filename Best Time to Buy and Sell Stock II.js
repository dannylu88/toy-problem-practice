/*
O:maximum profit (you can buy and sell multiple times)
I:array of numbers
C:N/A
E:[7,1,5,3,6,4] --> buy one day2, 1..sell when 5, 5 - 1 =4
                --> buy one day4, 3, sell when 6, 6 - 3 = 3
                sum = 4 + 3 = 7

*/


/*
test = [7,1,5,99,6,4];
console.log(maxProfit(test))  ---> 98 --> buy when it's 1 and sell when it's 99, profit = 98

*/
var maxProfit = function(prices) {
    //assume the max profix = 0
    var sum=0;
    let len=prices.length;
  for (let i = 0; i <= len; i++ ) {
      /*
       this seems weird right? you just compare next element than get the difference?
       but this is legit, because assume now it's 1, next day is 5, next day is 99,
       you would buy at 1 sell at 99, so 98,
       but you can also assume you buy at 1, since it keeps increasing, you will
       get the sum as (5-1) + (99-5) = 98
       
       You just get the difference by chopping off the sums

      */
        if(prices[i]<prices[i+1]){
          sum+=prices[i+1]-prices[i];
        }
    }
  return sum;
};