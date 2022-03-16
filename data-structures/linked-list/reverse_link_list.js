// Reverse Linked List
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

    // add element to linked list
    addElement(element) {
        let newNode = new Node(element);
        if (this.head) {
            let currentHead = this.head;
            while (currentHead.next) {
                currentHead = currentHead.next;
            }
            currentHead.next = newNode;
        } else {
            this.head = newNode;
        }
    }

    // reverse a linked list
    reverseList() {
        if (this.head) {
            let headPointer = this.head;
            let nextPointer = this.head.next;
            let tempPointer;
            let firstNodeFlag = true;
            while (nextPointer) {
                if (firstNodeFlag) {
                    headPointer.next = null;
                    firstNodeFlag = false;
                }
                tempPointer = nextPointer.next;
                nextPointer.next = headPointer;
                headPointer = nextPointer;
                nextPointer = tempPointer;
            }
            this.head = headPointer;
        } else {
            console.log("Linked list is empty!");
        }
    }
    
    // print linked list
    printList() {
        if (this.head) {
            let tempHead = this.head;
            while (tempHead) {
                process.stdout.write(` ${tempHead.element} ${tempHead.next ? "=>" : "\n"}`);
                tempHead = tempHead.next;
            }
        } else {
            console.log("Linked list is empty!");
        }
    }
}

let list = new LinkedList();
list.addElement(10);
list.addElement(11);
list.addElement(12);
list.addElement(13);
list.addElement(14);
list.addElement(15);

console.log("ORIGINAL LIST - ");
list.printList();

list.reverseList();
console.log("REVERSED LIST - ");
list.printList();