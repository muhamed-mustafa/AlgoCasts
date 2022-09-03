// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  push(ele) {
    this.items[this.count] = ele;
    console.log(` ${ele} pushed to ${this.count}`);
    this.count++;
  }

  pop() {
    if (this.count === 0) return;
    const removeItem = this.items[this.count - 1];
    this.count--;
    console.log(`removed => ${removeItem}`);
    return removeItem;
  }

  peek() {
    return this.items[this.count - 1];
  }

  isEmpty() {
    const checkEmpty =
      this.count === 0 ? 'stack is empty' : 'stack is not empty';
    console.log(checkEmpty);
  }

  length() {
    console.log(this.count);
    return this.count;
  }

  clear() {
    return (this.count = 0);
  }
}

const s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.isEmpty();
s1.pop();
s1.length();
s1.peek();
s1.clear();
s1.isEmpty();

module.exports = Stack;
