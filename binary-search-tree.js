class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //if there is no root, create a node and return
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    //then have the root be the current node
    let current = this.root;

    //continue to run code until it is returned
    while (true) {

      //if value is less than current value AND there is no left node, create a new left node and stop loop
      //if there is a left node, have that be the current left node
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      }
      //if the value is greater than current value and there is no right node create a new one and stop loop
      //if there is a right node, have that be the current right node
      else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }



  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    // Helper function for recursive insertion
    function insertNode(node, val) {
      if (node === null) {
        return new Node(val); // Create a new node if the current node is null
      }

      if (val < node.val) {
        node.left = insertNode(node.left, val); // Recursively insert into the left subtree
      } else if (val > node.val) {
        node.right = insertNode(node.right, val); // Recursively insert into the right subtree
      }

      return node;
    }

    this.root = insertNode(this.root, val); // Start the recursive insertion from the root

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    //if there is no root, return undefined
    if (this.root === null) {
      return undefined;
    }

    let current = this.root;

    //while there is a root, compare the current node with the value
    while (current !== null) {

      //if current value is equal to value, return current value
      if (current.val === val) {
        return current;
      }
      // Else if value is less than current value, have the left node be the current node
      else if (val < current.val) {
        current = current.left
      }

      //Else have the current node be the right node
      else {
        current = current.right
      }
    }
    //If nothing matched after going through all nodes, return undefined
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    // Helper function for recursive search
    function search(node, val) {
      if (node === null) {
        return undefined; // Return undefined if the node is null
      }

      if (val === node.val) {
        return node; // Return the node if the value is found
      }

      if (val < node.val) {
        return search(node.left, val); // Recursively search in the left subtree
      } else {
        return search(node.right, val); // Recursively search in the right subtree
      }
    }

    return search(this.root, val); // Start the recursive search from the root
  }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    if (this.root === null) {
      return [];
    }

    let visitedNodes = [];

    function traverse(node) {
      // Visit the current node
      visitedNodes.push(node.val);

      // Traverse left subtree
      if (node.left !== null) {
        traverse(node.left);
      }

      // Traverse right subtree
      if (node.right !== null) {
        traverse(node.right);
      }
    }

    traverse(this.root);

    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    if (this.root === null) {
      return [];
    }

    let visitedNodes = [];

    function traverse(node) {

      // Traverse left subtree
      if (node.left !== null) {
        traverse(node.left);

      }
      //Push all nodes visited to array
      visitedNodes.push(node.val);


      // Traverse right subtree
      if (node.right !== null) {
        traverse(node.right);

      }


    }

    traverse(this.root);

    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    if (this.root === null) {
      return [];
    }

    let visitedNodes = [];

    function traverse(node) {

      // Traverse left subtree
      if (node.left !== null) {
        traverse(node.left);

      }
      
      //Push all nodes visited to array


      // Traverse right subtree
      if (node.right !== null) {
        traverse(node.right);

      }
      visitedNodes.push(node.val);


    }

    traverse(this.root);

    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (this.root === null) {
      return [];
    }

    let result = [];
    let queue = [this.root];
  
    while (queue.length) {
      let node = queue.shift(); // Dequeue a node from the front of the queue
      result.push(node.val);    // Visit the dequeued node
  
      // Enqueue the left child
      if (node.left) {
        queue.push(node.left);
      }
  
      // Enqueue the right child
      if (node.right) {
        queue.push(node.right);
      }
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
