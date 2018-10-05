function climbStairs (n) {
    // Write your code here, and
    // return your final answer.
    var counter = 3;
    var ways = [];
    ways[0] = 0; //0
    ways[1] = 1; //1
    ways[2] = 2; //2
  
    while (counter <= n)
    {
      ways[counter] = ways[counter -1] + ways[counter -2];
      counter ++;
    }
    return ways[n];
  }


  //same function as the above one
  var climbStairs = function(n) {
	let result = 0;
	let prev1 = 1;
	let prev2 = 2;
	let i = 2;
	if (n <= 0) return 0;
	if (n <= 2) return n;
	while (i < n) {
		i++;
		result = prev1 + prev2;
		[prev2,prev1] = [result,prev2];
	}
	return result;
};