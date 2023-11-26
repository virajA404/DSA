class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        // if(this.length == 1){
        //     this.head.next = {
        //         value: value,
        //         next: null
        //     }
        //     this.tail = this.head.next;
        // }else{ 
        //-------Not needed-------//
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value){
        // const newHead = {
        //     value: value,
        //     next: null // This should not be: this.head
        // }

        const newHead = new Node(value);

        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        return this;
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.prepend(36)
console.log(myLinkedList)


