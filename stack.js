
class Stack {
    constructor() {
        this.items = []
        this.count = 0
         
    }

    // Add element to top of stack
    push(element) {
        this.items[this.count] = element
        let push_res=`${element}`; //console.log(`added to ${this.count}`);
        this.count += 1;
        let count=this.count -1;
        //return [push_res,count];
        return [push_res, count];
    }

    // Return and remove top element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count == 0) return undefined
        let deleteItem = this.items[this.count - 1]
        this.count -= 1
        console.log(`${deleteItem} removed`)
        return deleteItem
    }

    // Check top element in stack
    peek() {
        console.log(`Top element is ${this.items[this.count - 1]}`)
        return this.items[this.count - 1]
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty')
        return this.count == 0
    }

    // Check size of stack
    size() {
        console.log(`${this.count} elements in stack`)
        return this.count
    }

    // Print elements in stack
    print() {
        let str = ''
        for(let i = 0; i < this.count; i++) {
            str += this.items[i] + ' '
        }
        return str
    }

    // Clear stack
    clear() {
        this.items = []
        this.count = 0
        console.log('Stack cleared..')
        return this.items
    }
}

const stack = new Stack()

$(document).ready(function () {

    const input = $("input");
    const stackDisplay = $("#stack");
    const deletedDisplay = $(".popped");

    function updateStack() {
        stackDisplay.empty();

        for (let i = stack.count - 1; i >= 0; i--) {
            stackDisplay.append(
                `<div class="row bg-primary text-white p-2 m-1">${stack.items[i]}</div>`
            );
        }
    }

    $("button").eq(0).click(function () {
        let value = input.val().trim();

        if (value === "") {
            alert("Please enter a value.");
            return;
        }

        stack.push(value);
        input.val("");
        updateStack();
    });

    $("button").eq(1).click(function () {
        let removed = stack.pop();

        if (removed === undefined) {
            alert("Stack is empty.");
            return;
        }

        deletedDisplay.text(removed);
        updateStack();
    });

    $("button").eq(2).click(function () {
        let top = stack.peek();

        if (top === undefined) {
            alert("Stack is empty.");
            return;
        }

        updateStack();
        stackDisplay.children().first().addClass("border border-warning border-4");
    });

    $("button").eq(3).click(function () {
        stack.clear();
        deletedDisplay.empty();
        updateStack();
    });

});