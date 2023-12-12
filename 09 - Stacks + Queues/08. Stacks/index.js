class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    newNode.value = value;
    if(this.length === 0){
      this.bottom = newNode;
      this.top = newNode;
    }else{
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    const holdingPointer = this.top.next;
    this.top = holdingPointer;
    this.top.next = null;
    this.length--;
    return this;
  }
  isEmpty(){
    if(this.length === 0){
      return true;
    }else{
      return false;
    }
  }
}

const myStack = new Stack();
myStack.push("google")
myStack.push("Udemy")
myStack.push("Discord")
// myStack.push("Instagram")
console.log(myStack)
// console.log(myStack.peek());
console.log(myStack.pop())
console.log(myStack.isEmpty())
//Discord
//Udemy
//google
