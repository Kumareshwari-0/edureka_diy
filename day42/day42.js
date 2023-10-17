class TreeNode{
    constructor(element)
    {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor()
    {
        this.root = null;
        //this.compareFun = compareFun;
    }

    insert(element)
    {
        if(element == null)
            return false;
            if(this.root == null)
            this.root = new TreeNode(element);
            else
            this.insertNode(element, this.root);
            return true;
    }
    insertNode(element, node){
        if(element < node.element){
            if(node.left == null)
                node.left = new TreeNode(element);
                else
                this.insertNode(element, node.left);
        }
        else if(element>node.element)
        {
                   if(node.right === null)
                     node.right = new TreeNode(element);
                     else
                     this.insertNode(element, node.right);
        }

    }
    remove(element)
    {
        this.root = this.removeNode(this.root, element) 
    }
    removeNode(node, element)
    {
        if(node == null)
        return false;
        if(element < node.element){
            node.left = this.removeNode(node.left, element);
            return node;
        }
        else if(element > node.element){
        node.right = this.removeNode(node.right, element);
        return node;}
        else{
            if(node.left == null && node.right == null){
                node = null;
                return node;
            }
            if(node.left == null){
                node = node.right;
                return node;
            }
            else if(node.right == null){
                node = node.left;
                return node;
            }
            const aux = this.removeNode(node.right);
            node.element = aux.element;
            node.right = this.removeNode(node.right, aux.element);
            return node;
        }
    }
    search(element){
        return this.searchNode(this.root, element);
    }
    searchNode(node, element){
        if(node == null){
            return false;
        }
        if(element < node.element){
            return this.searchNode(node.left, element);
        }
        else if(element > node.element){
            return this.searchNode(node.right, element);
        }
        else{
            return true;
        }
        }
        InOrderTraverse(callback){
            this.InOrderTraverseNode(this.root, callback)
        }
        InOrderTraverseNode(node, callback){
            if(node != null){
                this.InOrderTraverseNode(node.left, callback);
                callback(node.element);
                this.InOrderTraverseNode(node.right, callback);
            }
        }
        preOrderTraverse(callback){
            this.preOrderTraverseNode(this.root, callback)
        }
        preOrderTraverseNode(node, callback){
            if(node != null){
                callback(node.element);
                this.preOrderTraverseNode(node.left, callback);
                this.preOrderTraverseNode(node.right, callback);
            }
        }
        postOrderTraverse(callback){
            this.postOrderTraverseNode(this.root, callback)
        }
        postOrderTraverseNode(node, callback){
            if(node != null){
                this.postOrderTraverseNode(node.left, callback);
                this.postOrderTraverseNode(node.right, callback);
                callback(node.element);
            }
        }
    }



const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(120);
bst.insert(1);
bst.insert(15);
bst.insert(25);
bst.insert(26);
bst.remove(1);
console.log(bst)
console.log(bst.search(30));
console.log(bst.search(10));
console.log("*******************");
bst.InOrderTraverse((value) => {
    console.log(value);
});
console.log("*******************");
bst.preOrderTraverse((value) => {
     console.log(value);
});
console.log("*******************");
bst.postOrderTraverse((value) => {
     console.log(value);
});
