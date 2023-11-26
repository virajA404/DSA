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
        if(this.length == 1){
            this.head.next = {
                value: value,
                next: null
            }
            // this.tail = this.head.next;
        }else{
            this.head.next = {
                next: {
                    value: value,
                    next:null
                }
            }
        }
        this.tail = this.head.next;
        this.length++;
    }
}

const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(16)
// myLinkedList.append(36)
console.log(myLinkedList)


