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