// Implement Map in js

class MapKey {
  constructor() {
    this.items = {};
    this.size = 0;
  }

  set(key, value) {
    if (!this.items.hasOwnProperty(key)) {
      this.size++;
    }

    // Overwrite existing properties with new properties
    this.items[key] = value;
  }

  delete(key) {
    if (this.items.hasOwnProperty(key)) {
      this.size--;
      return delete this.items[key];
    }
  }

  get(key) {
    return this.items[key];
  }

  size() {
    return this.size;
  }

  has(key) {
    return this.items.hasOwnProperty(key);
  }
}

let map = new MapKey();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
console.log(map.get('a')); // 1
map.set('a', 100);
console.log(map.get('a')); // 100
console.log(map.size); // 3
map.delete('a');
console.log(map.size); // 2
console.log(map.has('d')); // false
console.log(map.has('b')); // true
