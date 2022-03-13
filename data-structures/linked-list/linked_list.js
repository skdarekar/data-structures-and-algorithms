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
        if (this.head) {
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
    // removeFrom(location)
    // removeElement(element)

    // Helper methods
    // isEmpty

    // sizeOfList
    // PrintList
    printList() {
        if (this.head) {
            while (this.head) {
                // console.log(` ${this.head.element} `);
                process.stdout.write(` ${this.head.element} -> `);
                this.head = this.head.next;
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
list.addElement(15);
list.addElement(17);
list.addElement(19);
list.printList();