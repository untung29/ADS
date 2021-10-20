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
      for (let i = 0; i < currentBuckets.length; i++) {
        if (currentBuckets[i][0] === key) {
          return currentBuckets[i][1];
        }
      }
    }

    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
