class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
    set(key, value){
      const arr = [];
      arr.push(key, value);
      this.data.push(arr);
      console.log(this.data);
    }
    get(key){
      this.data.forEach(element => {
        if(element[0] === key){
          console.log(element[1]);
        }
      });
    }
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  console.log(myHashTable._hash('grapes')) 
  myHashTable.set('apples', 9)
  myHashTable.get('apples')
  