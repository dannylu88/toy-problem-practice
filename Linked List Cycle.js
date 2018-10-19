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

2. keep checking the next node, if head.next is never null, then it's a cycle linked list
*/

//2 pointer method
const hasCycle = (head) => {
	if(!head || !head.next) return false;
	
	let slow = head;
	let fast = head.next
	
	while(fast && fast.next){
		if(slow === fast) return true;
		fast = fast.next.next
		slow = slow.next
	}
	return false;
}