// implement Stack Using Queue

const Queue = require('./queue.js');

class myStack {
  constructor() {
    this.queue = new Queue();
  }

  push(item) {
    let r = this.queue.size;
    this.queue.enqueue(item);
    while (r > 0) {
      this.queue.enqueue(this.queue.dequeue());
      r--;
    }
  }

  pop() {
    return this.queue.dequeue();
  }

  top() {
    return this.queue.peek();
  }

  empty() {
    return this.queue.isEmpty;
  }

  get size() {
    return this.queue.size;
  }
}

const stack = new myStack();
console.log(stack.size); // 0
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.size); // 3
stack.pop();
console.log(stack.size); // 2
