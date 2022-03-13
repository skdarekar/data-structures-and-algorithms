// Implement linked list
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
    // functions to be implemented
    // addElement(element)
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
    // insertAt(element, location)
    insertAt(element, location) {
        if (this.sizeOfList() >= location - 1) {
            let newNode = new Node(element);
            let i = 1;
            let prevNode = this.head;
            let nextNode = this.head.next;
            if (location === 1) {
                newNode.next = prevNode;
                this.head = newNode;
                return;
            }
            while (i < location - 1 && nextNode) {
                prevNode = nextNode;
                nextNode = nextNode.next;
                i++;
            }
            prevNode.next = newNode;
            newNode.next = nextNode;
        } else {
            console.log("Invalid location to insert element");
        }
    }
   
    // removeElement(element)
    removeElement(element) {
        if (!this.isEmpty()) {
            // delete element from start
            if (this.head.element == element) {
                let currentHead = this.head;
                // delete currentHead;
                console.log("\n DELETED", element);
                this.head = this.head.next;
            } else {
                let currentNode = this.head.next;
                let prevNode = this.head;
                while (currentNode) {
                    if (currentNode.element === element) {
                        console.log("\n DELETED", element);
                        prevNode.next = currentNode.next;
                        break;
                    } else {
                        prevNode = currentNode;
                        currentNode = currentNode.next;
                    }
                }
            }
        }
    }
    // Helper methods
    // isEmpty
    isEmpty() {
        return this.head ? false : true;
    }
    // sizeOfList
    sizeOfList() {
        if (this.isEmpty()) return 0;
        let tempHead = this.head;
        let size = 0;
        while (tempHead) {
            size++;
            tempHead = tempHead.next;
        }
        return size;
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
list.printList();

list.removeElement(10);
list.printList();
console.log(list.sizeOfList())
list.insertAt(111, 5);
list.printList();