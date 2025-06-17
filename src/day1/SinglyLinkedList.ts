type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {}

    append(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
    }

    remove(item: T): T | undefined {
        let prev = undefined;
        let curr = this.head;
        let found = false;
        while (curr) {
            if (curr.value === item) {
                found = true;
                break;
            }
            prev = curr;
            curr = curr.next;
        }
        if (found) {
            if (prev) {
                prev.next = curr?.next;
            } else {
                this.head = curr?.next;
            }
            this.length--;
        }

        return curr?.value;
    }

    get(idx: number): T | undefined {
        if (idx > this.length - 1) {
            console.log("Out of index");
            return undefined;
        }
        let curr = this.head;
        let i = 0;
        while (i < idx) {
            curr = curr?.next;
            i++;
        }
        return curr?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx > this.length - 1) {
            console.log("Out of index");
            return undefined;
        }

        this.length--;
        let value: T | undefined;
        if (idx === 0) {
            value = this.head?.value;
            this.head = this.head?.next;
            return value;
        }

        let i = 0;
        let curr = this.head;
        while (i < idx - 1) {
            curr = curr?.next;
        }

        if (curr) {
            value = curr.next?.value;
            curr.next = curr?.next?.next;
        }

        return value;
    }
}
