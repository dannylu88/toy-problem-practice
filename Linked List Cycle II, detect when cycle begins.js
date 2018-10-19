/*
O:return the node where it start the cycle, or null if it's not cycle linked list
I:linked list
C:cannot modify input + single memory usage
E:  1-->2-->3-->4-->2-->3-->4-->2-->3-->4.... return 2
    1-->2-->3-->4-->5-->6.... return null, not a cycle linked list
*/

//using slow and fast approach, slow move 1, fast move 2
let detectCycle = function(head) {
    let slow = head;
    let fast = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            while (head !== fast) {
                head = head.next;
                fast = fast.next;
            }
            return head;
        }
    }
    return null;
};