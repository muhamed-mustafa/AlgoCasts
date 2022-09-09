class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    if (this.isEmpty) return;
    let deletedItem = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return deletedItem;
  }

  peek() {
    return this.items[this.head];
  }

  get size() {
    return this.tail - this.head;
  }

  get isEmpty() {
    return this.size === 0;
  }

  printItems() {
    for (let item in this.items) {
      console.log(this.items[item]);
    }
  }
}

const queue = new Queue();
queue.enqueue(7);
queue.enqueue(2);
queue.printItems();
console.log(queue.size); // 2
queue.dequeue();
console.log(queue.size); // 1
console.log(queue.peek()); // 2;
console.log(queue.size); // 1
