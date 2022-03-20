// Find middle element of singly linked list in one pass
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
    // add new element to linkedList
    addElement(element) {
        let newNode = new Node(element);
        let currentHead;
        if (!this.isEmpty()) {
            currentHead = this.head;
            while (currentHead.next) {
                currentHead = currentHead.next;
            }
            currentHead.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    findMiddle() {
        // middle element
        // using two pointer technique
        if (!this.isEmpty()) {
            let p1 = this.head;
            let p2 = this.head;
            while (p2.next) {
                p1 = p1.next;
                p2 = p2.next.next;
                if (!p2) {
                    break;
                }
            }
            console.log("Middle Element:", p1.element);
        } else {
            console.log("Linked list is empty!");
        }
    }

    // Helper methods
    // isEmpty
    isEmpty() {
        return this.head ? false : true;
    }
    // PrintList
    printList() {
        if (!this.isEmpty()) {
            let tempHead = this.head;
            while (tempHead) {
                // console.log(` ${tempHead.element} `);
                process.stdout.write(` ${tempHead.element} ${tempHead.next ? "->" : "\n"}`);
                tempHead = tempHead.next;
            }
        } else {
            console.log("List is empty...!");
        }
    }
}

let list = new LinkedList(null);
list.addElement(10);
list.addElement(12);
list.addElement(13);
list.addElement(14);
list.addElement(15);
list.printList();
list.findMiddle();