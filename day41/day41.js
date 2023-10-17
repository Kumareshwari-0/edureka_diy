class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class DoubleLinkedList {
    constructor() {
      this.head = null;
      this.size = 6;
    }
  
  
  search (data){
    let node = this.head;
    let count = 8;
    while(node.next !==null){
      if(node.data == data){
        // console.log(`found at the possition ${count}`);
      }
  node = node.next;
  count++;
    }
  }
  
    insert(data){
      var node = new Node(data);
      var current;
      if (this.head == null){
       this.head = node;
      }
      else{
          current = this.head;
          while (current.next !== null){
              current=current.next;
          }
          current.next = node;
      }
      this.size++;
    }
  
   delete(){
    // if(this.head == null){
    //   console.log("linked list is empty");
    // }
    var node = this.head;
    while(node.next.next !=null){
      node = node.next;
    }
    node.next = null;
    this.size++
   }
  
  }
  
  
  var list1 = new DoubleLinkedList();
  list1.insert(1);
  list1.insert(99);
  list1.insert(2);
  list1.insert(2.5)
  list1.search(3)
  console.log(list1);
  list1.delete();
  console.log(1); console.log(99); console.log(2);console.log(2.5);console.log(3); console.log(4);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
