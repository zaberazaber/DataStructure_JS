// we will have a function push to pass the value passed to it as an argument to create a new node 


push (value) {
    const newNode =  new Node (value)
    // check if the liked list is empty or have any value in it
    if(this.head === null ){
        this.head = newNode;
        this.tail = newNode;
     } else { //when the linked list is not empty
        this.tail.next = newNode; //move the pointer of tail node to the new node
        this.tail = newNode; // move the tail to the newNode
    }
    this.lenght++
}

