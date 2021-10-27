// 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

class DoublyLinkedList {
  constructor(value) {
    this.head = { value: value, next: null, previous: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = { value: value, next: null, previous: null };
    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = { value: value, next: null, previous: null };
    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    let value = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      value.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return value;
  }

  insert(index, value) {
    // REMEMBER! THIS ALL POSSIBLE BECAUSE JAVASCRIPT IS USING REFERENCE

    // Just add to the end of the list if the index is out of the scope
    if (index >= this.length) {
      return this.append(value);
      this.length++;
    }
    // New Node
    let newNode = { value: value, next: null, previous: null };

    // Get the reference for the previous value to be able to get the 'next' and change it to the next one
    let leader = this.traverseToIndex(index - 1);

    // Get the next value of that (the index we would like to change)
    let follower = leader.next;

    // We change the leader.next to the new node
    leader.next = newNode;

    // Set the newNode pointer to the holding pointer
    newNode.previous = leader;
    newNode.next = follower;
    follower.previous = newNode;

    this.length++;
    return this;
  }

  traverseToIndex(index) {
    if (index <= 0) {
      return this.head;
    }

    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  remove(index) {
    // If the first index is needed to be removed
    if (index === 0) {
      this.head = this.head.next;
      this.head.previous = null;
      this.length--;

      return;
    }

    // We want to delete a specific index
    // and if that specific index has next value
    // then we want to connect that value with the previous value that the element is deleted

    let leader = this.traverseToIndex(index - 1);

    if (index === this.length - 1) {
      leader.next = null;
      leader.previous = this.tail;
      this.tail = leader;
    } else {
      // [200, 2, 10, 5, 16]
      let holdingPointer = leader.next;
      holdingPointer.next.previous = leader;
      leader.next = holdingPointer.next;
      //   leader.previous = holdingPointer.previous;
    }

    console.log(leader.next);

    this.length--;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.prepend(200);
myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.insert(1, 2);

// myLinkedList.insert(1, 2);
myLinkedList.remove(1);

console.log(myLinkedList.printList());
