/*
brutal force solution, check all the combinations

[-2,1,-3,4,-1,2,1,-5,-4],
1. i = 0, j = 1   -2 + 1 = -1, max(-1,1), 1 is bigger --> currentMax = 1
   and max(1,nums[0]the default max), 1 is bigger so the max so far = 1

2. i = 0, j = 2   currentMax + nums[2] = 1 + (-3) = -2,  max (1,-2), 1 is bigger so currentMax stay = 1
   and max (1,1) = 1

3. i = 0, j = 3   currentMax + nums[3] = 1

*/

const maxSubArray = (nums) => {
	let max = nums[0]
	for(let i = 0; i < nums.length; i++){
		let currentMax = nums[i]
		for(let j = i + 1; j < nums.length; j++){
			currentMax = Math.max(currentMax+nums[j],nums[j])
			max = Math.max(currentMax,max)
		}
	}
	return max
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,-4]))

/*
linear solution

这里打一下中文比较好理解
所谓的currentMax可以是看成cumulative的和, 每一轮(就是每多一个数字),这个和都会跟上一个轮回的比较,
看看是谁比较大,如果上一轮比较大,上一轮的继续当大佬,如果我比较大我就上台
currentMax = Math.max(currentMax + nums[i], nums[i]) 这一行,是看究竟和比较大还是单独数字比较大,
因为如果array都是什么-1,3,5,7   忽然有一个10000000的数字在里面, 它也算是一个答案因为它是array的一部分

*/

const maxSubArray = (nums) => {
    let currentMax = nums[0];
    let max = nums[0];

    for(let i = 1; i < nums.length; i++){
        currentMax = Math.max(currentMax + nums[i], nums[i])
        max = Math.max(currentMax,max)
    }
    return max;
};