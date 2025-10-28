const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  stack = [];
  push(value) {
    // Remove line below and write your code here
    this.stack.push(value);
  }

  pop() {
    // Remove line below and write your code here
    return this.stack.pop();
  }

  peek() {
    // Remove line below and write your code here
    return this.stack[this.stack.length - 1];
  }
}

module.exports = {
  Stack,
};
