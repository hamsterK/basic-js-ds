const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    // Remove line below and write your code here
    return this._root;
  }

  add(data) {
    // Remove line below and write your code here
    if (!this._root) {
      this._root = new Node(data);
      return;
    }

    addNode(data, this._root);

    function addNode(newData, node) {
      if (newData < node.data) {
        if (node.left) {
          addNode(newData, node.left);
        } else {
          node.left = new Node(newData);
        }
      } else if (newData > node.data) {
        if (node.right) {
          addNode(newData, node.right);
        } else {
          node.right = new Node(newData);
        }
      }
    }
  }

  find(data) {
    // Remove line below and write your code here
    return findNode(data, this._root);

    function findNode(data, node) {
      if (!node) return null;
      if (node.data === data) {
        return node;
      }

      if (node.data === null) {
        return null;
      }
      if (data < node.data) {
        return findNode(data, node.left);
      } else if (data > node.data) {
        return findNode(data, node.right);
      }
    }
  }

  has(data) {
    // Remove line below and write your code here
    return this.find(data) ? true : false;
  }

  remove(data) {
    // Remove line below and write your code here
    const nodesList = [];
    function getAllNodes(node) {
      if (!node) return;
      if (node.data !== data) {
        nodesList.push(node.data);
      }
      if (node.left) {
        getAllNodes(node.left);
      }
      if (node.right) {
        getAllNodes(node.right);
      }
    }

    getAllNodes(this._root);

    const newTree = new BinarySearchTree;
    nodesList.forEach(element => {
      newTree.add(element)
    });

    this._root = newTree._root;
  }

  min() {
    // Remove line below and write your code here
    if (!this._root) return null;

    function getLeftNode(node) {
      if (node.left) {
        return getLeftNode(node.left);
      }
      return node.data;
    }
    return getLeftNode(this._root);
  }

  max() {
    // Remove line below and write your code here
    if (!this._root) return null;

    function getRightNode(node) {
      if (node.right) {
        return getRightNode(node.right);
      }
      return node.data;
    }
    return getRightNode(this._root);
  }
}

module.exports = {
  BinarySearchTree
};