class Queue {
    constructor() {
        this.items = [];
    }

    // Add element at the rear of the queue
    enqueue(element) {
        this.items.push(element);
        return element;
    }

    // Remove element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.shift();
    }

    // Check the front element
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get queue size
    size() {
        return this.items.length;
    }

    // Clear the queue
    clear() {
        this.items = [];
    }
}

const queue = new Queue();

$(document).ready(function () {

    const input = $("input");
    const queueDisplay = $("#queue");
    const deletedDisplay = $(".popped");

    function updateQueue() {
        queueDisplay.empty();

        queue.items.forEach((item, index) => {
            queueDisplay.append(`
                <div class="row bg-primary text-white p-2 m-1">
                    ${item}
                </div>
            `);
        });
    }

    // Enqueue
    $("button").eq(0).click(function () {
        const value = input.val().trim();

        if (value === "") {
            alert("Please enter a value.");
            return;
        }

        queue.enqueue(value);
        input.val("");
        updateQueue();
    });

    // Dequeue
    $("button").eq(1).click(function () {
        const removed = queue.dequeue();

        if (removed === undefined) {
            alert("Queue is empty. Cannot dequeue.");
            return;
        }

        deletedDisplay.text(removed);
        updateQueue();
    });

    // Peek
    $("button").eq(2).click(function () {
        const front = queue.peek();

        if (front === undefined) {
            alert("Queue is empty. Cannot peek.");
            return;
        }

        updateQueue();

        queueDisplay.children().first()
            .addClass("border border-warning border-4");
    });

    // Clear
    $("button").eq(3).click(function () {
        queue.clear();
        deletedDisplay.empty();
        updateQueue();
    });

});