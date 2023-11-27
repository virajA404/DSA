// add a method insert() to the linked list that adds a node to the specified index.

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  insert(index, value) {
    //Code here
    if (index === 0) {
      console.log("value will be appended");
      this.prepend(value);
      return this.printList();

    } else if (index === this.length - 1) {
      console.log("value will be appended");
      this.append(value);
      return this.printList();

    } else if (index > this.length - 1) {
      console.log(`Please enter an index between 0 and ${this.length - 1}`);
      
    } else {
      const newNode = {
        value: value,
        next: null,
      };

      let currentNode = this.head;
      for (let i = 1; i < index; i++) {
        currentNode = currentNode.next;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
      return this.printList();
    }
  }
}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(24);
myLinkedList.prepend(1);
myLinkedList.insert(4, 99);
// myLinkedList.insert(20, 88)
