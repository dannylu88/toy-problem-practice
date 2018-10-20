/*
Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.

O:return null if no intersection, find the intersection node
I:2 linked list
C: 1.Cannot modify input
   2.O(n) run time + O(1) memory
E: see above
*/

const getIntersectionNode = (headA, headB) => {
	//3 while loops
	//1 while loops, determine different length of 2 linked list
	//2 while loops, catch up with the pointers
	//3 while loops, find if there is any intersection
	
	if(!headA || !headB) return null;
	
	let hA = headA;
	let hB = headB;
	let count = 0;
	
	while(hA && hB) {
		hA = hA.next;
		hB = hB.next;
		count++;
	}
	//if hA is shorter, which means after the above loop, hA reach the end
	if(hA === null) {
		while(hB) {
			hB = hB.next;
			headB = headB.next;
		}
	}
	else if(hB === null){
		while(hA) {
			hA = hA.next;
			headA = headA.next;
		}
	}
	while(headA && headB) {
		if(headA === headB) return headA;
		headA = headA.next;
		headB = headB.next;
	}
	return null;
}