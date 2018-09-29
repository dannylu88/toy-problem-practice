const mergeTwoLists = (l1, l2) => {
    
    //create a basic linked list for the merge
    let head = {
         val:-1,
         next:null
     };

     let current = head;
     
     //we start merging here, so while 2 lists exist, we keep going
     while (l1 && l2) {
         //if l1's value <= l2's value
         if (l1.val <= l2.val) {
             //current.next (the outer level value) = the smaller one
             current.next = l1
             //then l1 now = l1's next level number
             l1 = l1.next

             //if l2's val > l1 val
         } else {
           //then the current(merge list outer val) = l2
             current.next = l2
             //l2 now = l2's next level number
             l2 = l2.next
         }
         
         //save current.next to current, so when the next loop start, current.next can be the new value
         current = current.next
     }
     
     //this is for merging 2 different length lists
     //while either of them exist
     while (l1 || l2) {
       //if l1 exist, keep doing it for l1, if not, then keep doing for l2
         l1 ? (current.next = l1, l1 = l1.next) : (current.next = l2, l2 = l2.next)
         current = current.next
     }
     
     return head.next;
 };