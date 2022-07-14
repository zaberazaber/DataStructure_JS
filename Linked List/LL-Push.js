class Node {
     constructor(value){
         this.value = value
         this.next = null
     }
 }
 
 class LinkedList {
     constructor(value) {
         const newNode = new Node(value)
         this.head = newNode
         this.tail = this.head
         this.length = 1
     }

 //to create push method first we get to know the edge case scenario 
 //1- the list is empty that is head and tail both pointing to null
 //2- the lits has one or more element
     push(value) {
        const newNode = new Node(value) // this will create a new node that need to be pushed
        if(!this.head){  // if the list is empty
            this.head = newNode;
            this.tail = newNode;
        } else { // if the list is not empty
            this.tail.next = newNode; // assign the pointer of last element to the new Node
            this.tail = newNode; //assign the tail to the newNode
        }
        this.length++
        return this; //this will return the new list with the added new node
     }
 }
 
 let myLinkedList = new LinkedList(11) // creating the initial linked list with a node wiht vlaue 11
 myLinkedList.push(22)  // using the push method of the LinkedList class

 console.log(myLinkedList)
 //output
//  LinkedList {
//     head: Node { value: 11, next: Node { value: 22, next: null } },
//     tail: Node { value: 22, next: null },
//     length: 2
//   }


 