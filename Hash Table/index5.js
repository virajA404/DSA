class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }//O(1)
    set(key, value){
      let address = this._hash(key);

      if(!this.data[address]){
        this.data[address]=[];
      }
      this.data[address].push([key, value]);
      console.log(this.data);
      // else{
      //   for(let address = 0; address < this.data.length; address++){
      //     if(!this.data[address]){
      //       this.data[address]=[];
      //       this.data[address].push(key, value);
      //       console.log(this.data);
      //     }
      //   }
      // }
    }//O(1)
    get(key){
      let address = this._hash(key);
      this.data[address].forEach(element => {
        if(element[0] === key){
          console.log(element[1]);
        }else{
          console.log("Key is not found");
        }
      });
    }//If no collision = O(1) otherwise O(n)
  }
  
  const myHashTable = new HashTable(2);
  myHashTable.set('grapes', 10000)
  // myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.set('mango', 19)
  myHashTable.set('cherry', 92)
  myHashTable.set('banana', 12)
  console.log(myHashTable._hash('apples')) 
  console.log(myHashTable._hash('grapes')) 
  console.log(myHashTable._hash('mango')) 
  console.log(myHashTable._hash('cherry')) 
  console.log(myHashTable._hash('banana')) 

  myHashTable.get('cherry')
  