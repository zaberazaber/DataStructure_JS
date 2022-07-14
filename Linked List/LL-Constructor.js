class Node {  //to create a node object with vlaue and next key
    constructor(value){
        this.value = value;
        this.next = null
    }
}


class LinkedList {
    constructor(value){
        const newNode = new Node(value) //creating an instance of the class node to create a new node
        this.head  = newNode; // assigning the head to the new node that is created
        this.tail = this.head; // assigning the tail to the same node as head since there is only one element 
        this.lenght = 1 //initialising the length as one since we introduced a node 
    }
   
}


// to create a new node we call the class methods with the help of instance 
let myLinkedList = new LinkedList(11) // this new will call the constructor of LinkedList class 

console.log(myLinkedList)
//output
// LinkedList {
//     head: Node { value: 11, next: null },
//     tail: Node { value: 11, next: null },
//     lenght: 1
//   }