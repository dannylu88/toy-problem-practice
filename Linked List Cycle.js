/*
O:boolean
I:linked list
C:Single Memory space
E: 1-->2-->3-->4-->2-->3-->4-->2-->3-->4..... cycle linked list
   1-->2-->3-->4-->5--->6-->7   not a cycle linked list
*/

/*
There are two approach here,
1. 2 pointer move,  one is slow, move 1 to 1, second is fast, move 2 node at a time,
   at some time, if they are equal (fast catch up the slow one), means it's a cycle linked list

2. keep checking the next node, and change the checking node to null, 
   if it's ever comes to see a node is null, then it's a cycle linked list

   CONS: modify the original input
*/

//2 pointer method, runtime 60ms, beat 100%
const hasCycle = (head) => {
    //if head DNE, or head.next DNE, return false
	if(!head || !head.next) return false;
    
    //slow move 1 level
    let slow = head;
    //fast move 2 levels
	let fast = head.next
    
    //while fast and fast.next exist
	while(fast && fast.next){
        //and if slow and fast equal, return true, cycle linked list
        if(slow === fast) return true;
        //fast = next next
        fast = fast.next.next
        //slow = next
		slow = slow.next
	}
	return false;
}

//keep checking til the end solution
const hasCycle = (head) =>{
    //keep checking the head
    while(head){
        //if it's null then means it's cycle
        if(head.val === null) return true;
        //first check should be not null, then we change the val to null
        //if it's a cycled linked list, during sometimes it will comes back to the head
        head.val = null;
        head = head.next;
    }
    return false;
}
