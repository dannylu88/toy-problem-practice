const mergeTwoLists = (l1, l2) => {
    
    let head = {
         val:-1,
         next:null
     };
     let current = head;
     
     
     while (l1 && l2) {
         if (l1.val <= l2.val) {
             current.next = l1
             l1 = l1.next
         } else {
             current.next = l2
             l2 = l2.next
         }
         
         current = current.next
     }
     
     while (l1 || l2) {
         l1 ? (current.next = l1, l1 = l1.next) : (current.next = l2, l2 = l2.next)
         current = current.next
     }
     
     return head.next;
 };