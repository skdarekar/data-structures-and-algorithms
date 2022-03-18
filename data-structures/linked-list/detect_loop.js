// Detect loop in linkedList
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addElement(element) {
        // add new element to end of linked list
        let newNode = new Node(element);
        if (this.head) {
            let tempHead = this.head;
            while (tempHead.next) {
                tempHead = tempHead.next;
            }
            tempHead.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    printList() {
        // print linked list elements
        if (this.head) {
            let tempHead = this.head;
            while (tempHead) {
                process.stdout.write(`${tempHead.element} ${tempHead.next ? "=> " : ""}`);
                tempHead = tempHead.next;
            }
        } else {
            console.log("No data");
        }
    }

    detectLoop() {
        // todo
    }
}

let list = new LinkedList();
list.addElement(10);
list.addElement(11);
list.addElement(12);
list.printList();