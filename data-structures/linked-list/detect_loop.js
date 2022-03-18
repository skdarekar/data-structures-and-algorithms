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
            if (this.detectLoop()) {
                console.log("Aborting... Linked list contains loop, printing will go into infinite loop.");
                return;
            }
            let tempHead = this.head;
            while (tempHead) {
                process.stdout.write(`${tempHead.element} ${tempHead.next ? "=> " : ""}`);
                tempHead = tempHead.next;
            }
            console.log();
        } else {
            console.log("No data");
        }
    }

    createLoop(atLocation) {
        // create loop in linked list
        if (this.head) {
            let tempHead = this.head;
            let loopHead = this.head;
            let i = 1;
            while (tempHead.next) {
                if (i == atLocation) {
                    loopHead = tempHead;
                }
                i++;
                tempHead = tempHead.next;
            }
            tempHead.next = loopHead;
        } else {
            console.log("No data");
        }
    }

    detectLoop() {
        // detect if linked list contains loop
        if (this.head) {
            let tempHead = this.head;
            let loopDetected = false;
            while (tempHead) {
                if (!tempHead.visited) {
                    tempHead.visited = true;
                    tempHead = tempHead.next;
                } else {
                    loopDetected = true;
                    break;
                }
            }
            if (loopDetected) {
                console.log("Linked list contains loop.");
            } else {
                console.log("Linked list does not contains loop.");
            }
            return loopDetected;
        } else {
            console.log("emtpy list, no loop!!");
            return false;
        }
    }
}

let list = new LinkedList();
list.addElement(10);
list.addElement(11);
list.addElement(12);
list.printList();
list.createLoop(1);
list.detectLoop();
list.printList();
