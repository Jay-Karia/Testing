class Stack {
    constructor() {
        this.top = -1
        this.items = {}
    }

    get peek() {
        return this.items[this.top]
    }

    push(value) {
        this.top += 1
        this.items[this.top] = value;
    }

    pop() {
        this.top -= 1
    }
}

describe("Stack", () => {

    let stack;

    beforeEach(() => {
        stack = new Stack()
    })

    it("is created empty", () => {
        expect(stack.top).toBe(-1)
        expect(stack.items).toEqual({})
    })

    it("can push an item to top", () => {
        const pushItem = "Jay"

        stack.push(pushItem)
        expect(stack.top).toBe(0)
        expect(stack.peek).toBe(pushItem)
    })

    it("can pop an item off", () => {
        const top = stack.top
        stack.pop()

        expect(stack.top).toBe(top - 1)
    })
})