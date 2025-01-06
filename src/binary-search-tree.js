const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  static Node = class {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new BinarySearchTree.Node(data);
    if (this.treeRoot === null) {
      this.treeRoot = newNode;
      return;
    }

    let current = this.treeRoot;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          break;
        } else {
          current = current.left;
        }
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          break;
        } else {
          current = current.right;
        }
      } else {
        break;
      }
    }
  }

  has(data) {
    const node = this.find(data);
    return node !== null;
  }

  find(data) {
    let current = this.treeRoot;
    while (current !== null) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        }
        if (node.right === null) {
          return node.left;
        }

        let smallest = node.right;
        while (smallest.left !== null) {
          smallest = smallest.left;
        }
        node.data = smallest.data;
        node.right = removeNode(node.right, smallest.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.treeRoot = removeNode(this.treeRoot, data);
  }

  min() {
    if (this.treeRoot === null) {
      return null;
    }
    let current = this.treeRoot;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (this.treeRoot === null) {
      return null;
    }
    let current = this.treeRoot;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};