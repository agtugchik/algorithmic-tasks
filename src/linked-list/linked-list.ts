class Node {
  value: string;
  prev: Node | null;
  next: Node | null;
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  head: Node | null;
  tail: Node | null;
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value: string) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      const currentTail = this.tail;
      (currentTail as Node).next = newNode;
      newNode.prev = currentTail;
      this.tail = newNode;
    }
  }

  forward() {
    let node = this.head;
    const result: string[] = [];
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result.join(" ");
  }

  backward() {
    let node = this.tail;
    const result: string[] = [];
    while (node) {
      result.push(node.value);
      node = node.prev;
    }
    return result.join(" ");
  }
}

export default LinkedList;
