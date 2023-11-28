
class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        previous: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null,
        previous: null
      }
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      this.length++;
      return this.printList();
    }
    printList() {
      const array = [];
      let currentNode = this.tail;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.previous;
      }
      console.log(array);
    }
    prepend(value) {
      const newNode = {
        value: value,
        next: null,
        previous:null
      }
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this.printList();
    }
    // printList() {
    //   const array = [];
    //   let currentNode = this.head;
    //   while(currentNode !== null){
    //       array.push(currentNode.value)
    //       currentNode = currentNode.next
    //   }
    //   console.log(array);
    // }
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        console.log('yes')
        return this.append(value);
      }
      
      const newNode = {
        value: value,
        next: null,
        previous: null
      }
      const leader = this.traverseToIndex(index-1);
      const follower = leader.next;
      leader.next = newNode;
      newNode.previous = leader;
      newNode.next = follower;
      follower.previous = newNode;
      this.length++;
      return this.printList();
    }
    traverseToIndex(index) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }
    remove(index) {
      // Check Parameters      
      const leader = this.traverseToIndex(index-1);
      const unwantedNode = leader.next;
      const follower = unwantedNode.next;
      leader.next = follower;
      follower.previous = leader;
      this.length--;
      return this.printList();
    }
  }
  
  let myLinkedList = new LinkedList(10);
  myLinkedList.append(5);
  myLinkedList.append(16);
  myLinkedList.prepend(1);
  myLinkedList.insert(2, 99);
//   myLinkedList.insert(20, 88);
  myLinkedList.remove(3);
  
  
  
  