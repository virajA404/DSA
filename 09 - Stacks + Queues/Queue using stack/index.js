class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this.array;
  }
  pop() {
    this.array.pop();
    return this.array;
  }
  isEmpty() {
    if (this.array.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}

const stack1 = new Stack();
const stack2 = new Stack();

class MyQueue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }
  
    push(x) {
      
    }
  
    pop() {
  
    }
  
    peek() {
  
    }
  
    empty() {
  
    }
  }

  // myStack.push("google")
  // myStack.push("Udemy")
  // myStack.push("Discord")
  // console.log(myStack)
  
  // console.log(myStack.peek());
  
  // console.log(myStack.pop())
  // console.log(myStack.pop())
  // console.log(myStack.pop())
  
  // console.log(myStack.isEmpty())