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
    //we won't use count here, but it's good to know
	let count = 0;
    
    //this loop is to find the length of the shorter linked list
	while(hA && hB) {
        //while either one of them exist, keep going on
		hA = hA.next;
		hB = hB.next;
		count++;
	}
	//if hA is shorter, which means after the above loop, hA reach the end
	if(hA === null) {
        //so as long as the pointer of B exist, we keep moving
		while(hB) {
            /*
              here is a little bit tricky part

              now we know A is shorter because hA = null, the pointer reach til A's end

              in order to find the intersection, we need to find the difference of the lengths

              example: A has length of 5, B has length of 10, now we finish iterating A,
                       the pointer at A is right at the intersection, but the pointer at B is only at 10 - 5 = 5,
                       so we need B to reach its end too

                       to do that, we start from headB, the original headB, NOT the pointer, 
                       and we move the pointer by 5, so A and B has the same length
            */
			hB = hB.next;
			headB = headB.next;
		}
    }
    //case if hB is shorter
	else if(hB === null){
		while(hA) {
			hA = hA.next;
			headA = headA.next;
		}
    }
    //now we have the same length, so we can just check both together to see if anything equal
	while(headA && headB) {
		if(headA === headB) return headA;
		headA = headA.next;
		headB = headB.next;
	}
	return null;
}