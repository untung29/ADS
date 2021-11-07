class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // Get the very first item in the line
  peek() {
    return this.first;
  }

  enqueue(value) {
    const newItem = new Node(value);
    // First and last is the same means that there is no item before
    if (this.first === null) {
      // The both referencing to the same pointer
      this.first = newItem;
      this.last = newItem;
      this.length++;
      return;
    } else {
      // This will also affect this.first because they are referencing to the same item
      this.last.next = newItem;
      this.last = newItem;
    }

    this.length++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.length--;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.enqueue("Samir");

myQueue.dequeue();
myQueue.dequeue();

// console.log(myQueue.peek());

console.log(myQueue);

// Joy
// Matt
// Pavel
// Samir
