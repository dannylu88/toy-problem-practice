/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

 /*
stupid solution
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m;
    nums2.length = n;
    nums1.push(...nums2)
    nums1.sort((a,b) => a-b);
};

/*
a little about sort here, the default sort();
it will translate the input to a string then sort by unicode
[3,9,5,100]  --> this will be [100,3,5,9] because 1 is smallest
but that's not how we do it

inside sort, we can write a function

function compare(a,b) {
    return a - b    --> sort from small to big
    return b - a    --> sort from big to small
}

*/
