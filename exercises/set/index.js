// Implement Set in Js

class MySet {
  constructor() {
    this.set = [];
    this.idx = 0;
    this.size = 0;
  }

  has(element) {
    return this.set.indexOf(element) !== -1;
  }

  add(element) {
    if (!this.has(element)) {
      this.set[this.idx] = element;
      this.size++;
      this.idx++;
    }
  }

  delete(element) {
    if (this.has(element)) {
      let eleIdxRemoved = this.set.indexOf(element);
      this.set.splice(eleIdxRemoved, 1);
      this.size--;
      this.idx--;
    }
  }

  keys() {
    return this.set;
  }

  values() {
    return this.set;
  }
}

const s = new MySet();
s.add(10);
s.add(20);
s.add(30);
s.add(40);
console.log(s.values());
console.log(s.has(10));
s.delete(20);
console.log(s.keys()); // [10]

for (let ele of s.values()) {
  console.log(ele);
}
