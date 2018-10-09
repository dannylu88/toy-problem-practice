//beats 98.62%, 52ms
const isSameTree = (p,q) => {
    //p and q is the start nodes
    if(p===q) return true;
    //if pointer doesn't reach the end of the tree, keep going
    if(p===null || q===null) return false;
    //recursion check if has reached the end of the tree and recursion
	return p.val===q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

//beats 98.62%, runtime 52ms
var isSameTree = function(p, q){
    if(p===q) return true;
	if(p===null || q===null) return false;
	return p.toString()===q.toString();
}
TreeNode.prototype.toString = function(){
	return 'left'+(this.left? this.left.toString() : 'null')+' '+this.val+' '+'right'+(this.right? this.right.toString():'null');
}

//beats 91.44%, 56ms
var isSameTree = function(p, q){
	return stringify(p)===stringify(q);
}
function stringify(root){
	if(root===null) return 'null';
	return 'left'+stringify(root.left) + root.val + 'right'+stringify(root.right);
}