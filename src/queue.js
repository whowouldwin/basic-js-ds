const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
    this.front = null;
    this.tail = null;
  }
  createElement(value){
    return {value: value, next: null};
  }
  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    const newElement = this.createElement(value);
    if (this.tail) {
      this.tail.next = newElement;
    }
    this.tail = newElement;
    if (!this.front) {
      this.front = newElement;
    }
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    const frontValue = this.front.value;
    this.front = this.front.next;

    if (!this.front) {
      this.tail = null;
    }
    return frontValue;
  }
}

module.exports = {
  Queue
};
