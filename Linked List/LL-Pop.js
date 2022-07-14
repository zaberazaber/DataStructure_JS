class Node {
    constructor(value) {
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

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }


    
    //to create push first we get to know the edge case scenario 
    //1- the list is empty that is head and tail both pointing to null
    //2- the lits has one element
    //3- the list has 2 or more element

    pop() {
        let temp = this.head;
        let pre = this.tail;
        if (!this.head) return undefined; // the list is empty
        while (temp.next) { //the list has 2 or more element we run the loop to get the second last elemnt after poping the last element
            pre = temp; // move the pre to temp if the next pointer to temp is not null
            temp = temp.next; //move the temp to the next node
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {// in case the list has only one element and after poping no element is left
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
}

let myLinkedList = new LinkedList()
myLinkedList.pop()
console.log(myLinkedList)
//output
//LinkedList { head: null, tail: null, length: 0 }

myLinkedList = new LinkedList(11)
console.log(myLinkedList)
//output
//LinkedList {
//   head: Node { value: 11, next: null },
//   tail: Node { value: 11, next: null },
//   length: 1
// }

myLinkedList = new LinkedList(11)
myLinkedList.push(22)
myLinkedList.push(33)
myLinkedList.pop()
console.log(myLinkedList)
  //output
//   LinkedList {
//     head: Node { value: 11, next: Node { value: 22, next: null } },
//     tail: Node { value: 22, next: null },
//     length: 2
//   }
