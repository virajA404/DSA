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
    return this.printList();
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
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
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      newNode.next = currentNode.next;
      currentNode.next = newNode;
      this.length++;
      return this.printList();
    }
  }
  remove(index) {
    if (index > this.length - 1 || index == 0) {
      console.log(`Please enter an index between 0 and ${this.length - 1}`);
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      const deleteNode = currentNode.next;
      const nextNode = deleteNode.next;
      currentNode.next = nextNode;

      this.length--;
      return this.printList();
    }
  }

  reverse() {
    let firstItem = this.head;
    // console.log(firstItem);
    this.tail = this.head;
    let secondItem = firstItem.next;
    // console.log(secondItem);
    while(secondItem){
      const temp = secondItem.next;
      console.log("temp: ");
      console.log(temp);
      secondItem.next = firstItem;
      console.log("secondItem.next");
      console.log(secondItem.next);
      firstItem = secondItem;
      console.log("firstItem");
      console.log(firstItem);
      secondItem = temp
      console.log("secondItem");
      console.log(secondItem);
    }
    this.head.next = null;
    this.head = firstItem;
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(88);
myLinkedList.prepend(1);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(4, 20);
// myLinkedList.remove(3);
// myLinkedList.remove(6);
// myLinkedList.remove(5);
myLinkedList.reverse();
// myLinkedList.insert(20, 88)
