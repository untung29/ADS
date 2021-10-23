class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
      this.data[address].push([key, value]);
    }

    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    let currentBuckets = this.data[address];

    if (currentBuckets.length > 0) {
      // Because collision might happen!
      for (let i = 0; i < currentBuckets.length; i++) {
        if (currentBuckets[i][0] === key) {
          return currentBuckets[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];
    // for (let i = 0; i < this.data.length; i++) {
    //   // It is not an empty memory cell
    //   if (this.data[i] && this.data[i].length) {
    //     // also loop through all the potential collisic
    //     if (this.data.length > 1) {
    //       for (let j = 0; j < this.data[i].length; j++) {
    //         keysArray.push(this.data[i][j][0]);
    //       }
    //     } else {
    //       keysArray.push[this.data[i][0]];
    //     }
    //   }
    // }

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
console.log(myHashTable.keys());
