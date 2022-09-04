class MinStack {
  constructor() {
    this.stack = [];
    this.MinStack = [];
  }

  push(ele) {
    if (!this.stack.length) {
      this.MinStack.push(ele);
    } else {
      let min = Math.min(ele, this.MinStack[this.MinStack.length - 1]);
      this.MinStack.push(min);
    }

    this.stack.push(ele);
  }

  pop() {
    this.stack.pop();
    this.MinStack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.MinStack[this.MinStack.length - 1];
  }
}

let s1 = new MinStack();
s1.push(1);
s1.push(2);
console.log(s1.getMin()); // 1
s1.push(3);
s1.push(4);
s1.push(-4);
console.log(s1.getMin()); // -4
console.log(s1.top()); // -4
s1.pop();
console.log(s1.top()); // 4
