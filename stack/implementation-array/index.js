class Stack {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  peek() {
    return this.data[this.length - 1];
  }
  push(value) {
    this.data.push(value);
    this.length++;
  }

  pop() {
    this.data.pop();
    this.length--;
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");

// myStack.pop();

// myStack.push(30);
// myStack.push(40);

console.log(myStack);
