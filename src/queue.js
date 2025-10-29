const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getUnderlyingList() {
    // Remove line below and write your code here
    function getNode(node) {
      if (!node) {
        return null;
      }
      return {
        value: node.value,
        next: getNode(node.next)
      };
    }
    return getNode(this.head);
  }

  enqueue(value) {
    // Remove line below and write your code here
    if (!this.head) {
      this.head = new ListNode(value);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    // Remove line below and write your code here
    if (!this.head) {
      return undefined;
    }
    const targetValue = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return targetValue;
  }
}

module.exports = {
  Queue
};
