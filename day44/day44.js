class graph{
    constructor(){
        this.adjacencyList = new Map();
    }
    addNode(node){
        this.adjacencyList.set(node, []);
    }
    addEdge(origin, destination){
        this.adjacencyList.get(origin).push(destination);
    }
    removeNode(node){
        this.adjacencyList.delete(node);
        for(let item of this.adjacencyList.values()){
            for(var i = 0; i < item.length; i++){
                if(item[i] === origin){
                    item.splice(i, 1);
                }
            }
        }
    }
    removeEdge(node){
        this.adjacencyList.delete(node);
        for(let ele of this.adjacencyList){
                ele[1].map((item, index) => {
                    if(item === node){
                        ele[1].splice(index, 1);
                    }
                });
            }
        }
        bfs(start, end){
        const visited = new set(start);
        const queue = [start];
        visited.add(start);
        while (queue.length > 0) {
            const node = queue.shift();
            const destinations = this.adjacencyList.get(node);
            for(const destination of destinations){
                if(destination === end){
                    console.log("route exits between A and B");
                }
                visited.add(destination);
                queue.push(destination);
            }
        }           
        }
        dfs(start, end, visited = new set()){
            console.log(start);
            visited.add(start);
            const destinations = this.adjacencyList.get(start);
            for(const destination of destinations){
                if(!visited.has(destination)){
                    this.dfs(destination, end, visited);
                    if(destination === end){
                        console.log("route exits between A and B");
                    }
                }
            }
        }
}
const adjacencyList = new Map();
const g1 = new graph();
g1.addNode("A");
g1.addNode("B");
g1.addNode("C");
g1.addNode("D");
g1.addEdge("A", "B");
g1.addEdge("A", "C");
g1.addEdge("A", "D");
g1.addEdge("A", "D");
console.log(g1);
