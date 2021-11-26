class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Algorithm:
  // 1. Edge Case: If the binary search tree is null initially, then directly put the node into the binary search tree.
  // 2. Otherwise, loop through the binary search tree
  // 3. Check if the currentNode (set to the root initially) is greater than or equal than the value
  // 4. If less, then put to the left, and if greater than put to the right
  // 5. If the left/right is not null, then we need to continue looping because it cannot be occupied
  // 6. If null, then we need to place them into that

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        // Put the node to the left if less than
        if (value < currentNode.value) {
          // Check if the node is null, if null then place the node there
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }

          // If not, keep looping
          currentNode = currentNode.left;
        } else if (value > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }

          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;

    while (currentNode) {
      // The node is null, means that the value is not found
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        // currentNode.value === value (means it found)
        return true;
      }
    }

    return false;
  }

  breadthFirstSearch() {
    let currentNode = this.root;

    // To keep track on what to push first
    let queue = [];
    let list = [];

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }

      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    if (queue.length === 0) {
      return list;
    }

    let currentNode = queue.shift();
    list.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return this.breadthFirstSearchRecursive(queue, list);
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.breadthFirstSearchRecursive([tree.root], []));

// console.log(tree.lookup(2));
// console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
