const isSameTree = (p,q) => {
    //p and q is the start nodes
    if(p===q) return true;
    //if pointer doesn't reach the end of the tree, keep going
    if(p===null || q===null) return false;
    //recursion check if has reached the end of the tree and recursion
	return p.val===q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}