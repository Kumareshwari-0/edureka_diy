
class HashTable {
    constructor(size = 50) {
        this.bucket = new Array(size);
        this.size = size;
    }
    hash(key) {
        return key.toString().length % this.size;
    }
    SetItem(key, value) {
        let index = this.hash(key);
        if (!this.bucket[index]) {
            this.bucket[index] = [];
        }
        this.bucket[index].push([key,value]);
        return index;
    }
    GetItem(key){
        let index=this.hash(key);
        if(!this.bucket[index])
        return null;

        for(let bucket of this.bucket[index]){
            if (bucket[0]==key)
            {
                return bucket[1];
            }
        }
    }
}

const hashTable=new HashTable();

hashTable.SetItem("1001","Dora,I,m dora");
hashTable.SetItem("1002","Bujji,Hey there i m bujji");
hashTable.SetItem("1003","Bheem,Hey!I m bheem here!");
hashTable.SetItem("1004","Kalia");

hashTable.GetItem("1002");

console.log(hashTable.GetItem("1001"));
console.log(hashTable.GetItem("1003"));
console.log(hashTable.GetItem("1005"));