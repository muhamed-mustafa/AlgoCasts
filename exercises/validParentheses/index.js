function isValid(s) {
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];

  for (let paran of s) {
    if (obj.hasOwnProperty(paran)) {
      stack.push(paran);
    } else {
      const closeParan = stack.pop();
      console.log(obj[closeParan]);
      if (obj[closeParan] !== paran) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid('()[]')); // true
console.log(isValid('()[]{')); // false
console.log(isValid('()[]{}')); // true
