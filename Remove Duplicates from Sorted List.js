const deleteDuplicates = (head) => {
	/*
	[1,1,2]
	1.pointer scan cross the linked list
	2.need to compare previous and current, this is not an array so we need to start from the head
	
	*/
	//create previous and current variable
	let previous = null;
	let current = head;
	
	//while the current exist or not equal to null, if it's null that means it's at the end of linked list
	while(current){
		//if statement, trigger condition: previous cannot be null & previous.val = current.val
		if(previous !==null && previous.val === current.val){
			previous.next = current.next
		}
		else{
			previous = current
		}
			//if above is true, previous.next = current.next (this will replace 2 to 1 in the example
			//if above is false, that means they are not equal, move to the next element,
			//previous = current
		
		
		//move current to the next one
		//two pointer shift
     current = current.next
	}
		
	//return head of the linkedlist
	return head
}

  