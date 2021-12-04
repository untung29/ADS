var reverseList = function (head) {
  let prevNode = null;
  let firstNode = head;
  let secondNode = head.next;

  while (head) {
    // A way to keep track of head

    if (head.next) head = secondNode.next;

    // Swap them
    firstNode.next = prevNode;
    secondNode.next = firstNode;

    // Move to the next pointer
    prevNode = secondNode;
  }

  return prevNode;
};

const reverseLinkedListRecursive = (head, prevNode = null) => {
  if (!head) {
    return prevNode;
  }
  let nextNode = head.next;
  head.next = prevNode;
  prevNode = nextNode;

  reverseLinkedList(head, prevNode);
};
