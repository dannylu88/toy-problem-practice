/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.storage = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.storage.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.storage.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.storage[this.storage.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.storage[0];
    for(let i = 0; i<this.storage.length; i++){
        if(this.storage[i] < min) min = this.storage[i]
    }
    return min;

    //or you can do
    //return Math.min(...this.storage)  --> a little bit slower than for loop
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */