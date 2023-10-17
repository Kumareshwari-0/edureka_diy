class BinaryHeap{
    constructor(){
        this.arr = [];
    }
    push(elemnet){
        this.arr.push(elemnet);
        let index = this.arr.length - 1;
        const current = this.arr[index];
        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.arr[parentIndex];
            if(parent <= current){
                this.arr[parentIndex] = current;
                this.arr[index] = parent;
                index = parentIndex;
            }else break;
        }
    }
    popMax(){
        const max = this.arr[0], end = this.arr.pop();
        this.arr[0] = end;
        const length = this.arr.length, current = this.arr[0];
        let index = 0;
        while(true){
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild,rightChild;
            let swap = null;
            if(leftChildIndex < length){
                leftChild = this.arr[leftChildIndex];
                if(leftChild > current)swap = leftChildIndex;
            }
            if(leftChildIndex < length){
                leftChild = this.arr[leftChildIndex];
                if(
                    (swap === null && rightChild > current) || (swap !== null && rightChild > current)
                )
                swap = rightChildIndex;

        }
        if(swap === null) break;
        this.arr[index] = this.arr[swap];
        this.arr[swap] = current;
        index = swap;
    }
    return max;
}
}
const BH = new BinaryHeap();
BH.push(30);
BH.push(20);
BH.push(40);
BH.push(60);
BH.push(50);
BH.push(100);
BH.popMax();
console.log(BH);