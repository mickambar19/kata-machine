type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;
        if (!this.head) {
            this.head = this.tail = newNode;
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 && idx > this.length) {
            return;
        }

        if (idx === 0) {
            this.prepend(item);
            return;
        }
        if (idx === this.length - 1) {
            this.append(item);
            return;
        }
        this.length++;
        const newNode: Node<T> = { value: item };
        let i = 0;
        let curr = this.head;
        while (i < idx - 1) {
            curr = curr?.next;
            i++;
        }
        newNode.next = curr?.next;
        newNode.prev = curr;
        if (curr) curr.next = newNode;
    }

    append(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;
        if (!this.tail) {
            this.head = this.tail = newNode;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    remove(item: T): T | undefined {
        let idx: number = -1;
        let curr = this.head;
        while (curr) {
            if (curr.value === item) {
                idx += 1;
                break;
            }
            curr = curr.next;
            idx++;
        }
        if (idx < 0 || !curr) return;
        this.length--;

        if (curr.prev) curr.prev.next = curr.next;
        if (curr.next) curr.next.prev = curr.prev;

        if (idx === 0) {
            if (curr.prev) this.head = curr.prev;
            else this.head = curr.next;
        }

        const v = curr.value;
        curr = undefined;
        return v;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            return;
        }
        let curr = this.head;

        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }
        return curr?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            return;
        }
        this.length--;

        if (idx === 0 && this.head) {
            const h = this.head;
            this.head = this.head?.next;
            return h.value;
        }
        if (idx === this.length) {
            const t = this.tail;
            this.tail = this.tail?.prev;
            return t?.value;
        }
        let curr = this.head;
        for (let i = 0; i < idx && curr; i++) {
            curr = curr.next;
        }

        if (curr?.prev) curr.prev.next = curr.next;
        if (curr?.next) curr.next.prev = curr.prev;

        return curr?.value;
    }
}
