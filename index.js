class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}
class BST {
  constructor(value) {
    this.root = new Node(value)
    this.count = 0
  }

  size() {
    return this.count
  }
  
}