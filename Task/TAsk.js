class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


function getRandomNumber(mergedList) {
    let values = new Set();
    let current = mergedList;

    while (current) {
        values.add(current.val);
        current = current.next;
    }

    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * 1000);
    } while (values.has(randomNum));

    return randomNum;
}


function removeDuplicatesAndAddRandom(mergedList) {
    let current = mergedList;
    let values = new Set();

    while (current && current.next) {
        values.add(current.val);

        if (values.has(current.next.val)) {
            current.next.val = getRandomNumber(mergedList);
        } else {
            values.add(current.next.val);
            current = current.next;
        }
    }

    return mergedList;
}


function bubbleSortLinkedList(head) {
    if (!head || !head.next) return head;

    let swapped;
    do {
        swapped = false;
        let current = head;

        while (current && current.next) {
            if (current.val > current.next.val) {
                let temp = current.val;
                current.val = current.next.val;
                current.next.val = temp;
                swapped = true;
            }
            current = current.next;
        }
    } while (swapped);

    return head;
}


function mergeLinkedLists(list1, list2) {
    if (!list1.head) return list2;
    if (!list2.head) return list1;

    let current1 = list1.head;
    while (current1.next) {   
        current1 = current1.next;
    }

    
    current1.next = list2.head;

    
    list2.head = null;

    return list1;
}


function printList(head) {
    let current = head;
    const result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}


const list1 = new LinkedList();
list1.append(1);
list1.append(2);
list1.append(3);

const list2 = new LinkedList();
list2.append(3);
list2.append(4);
list2.append(5);

console.log("List 1:");
printList(list1.head);

console.log("List 2:");
printList(list2.head);


mergeLinkedLists(list1, list2);

console.log("Merged List:");
printList(list1.head);


removeDuplicatesAndAddRandom(list1.head);

console.log("After removing duplicates and adding random numbers:");
printList(list1.head);


bubbleSortLinkedList(list1.head);

console.log("After sorting:");
printList(list1.head);
