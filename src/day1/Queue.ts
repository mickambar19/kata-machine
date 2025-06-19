type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    enqueue(item: T): void {
        const newNode: Node<T> = { value: item };
        this.length++;
        if (!this.tail) {
            this.head = this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }

    deque(): T | undefined {
        if (!this.tail) {
            console.log("Empty");
            return;
        }
        this.length--;
        const curr = this.head;

        if (this.length === 0) {
            this.head = this.tail = undefined;
        } else {
            this.head = this.head?.next;
        }

        return curr?.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}
