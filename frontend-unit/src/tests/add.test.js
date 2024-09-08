const add = require("../utils/add.ts")

// test suite
describe("Adds", () => {

  // tests #1
  it("1 + 2", () => {
    expect(add(1, 2)).toBe(3)
  })

  // tests #2
  it("10000 + 10000012", () => {
    expect(add(10_000, 1_00_00_012)).toBe(10_010_012)
  })

  // tests #3
  it("-123 -22", () => {
    expect(add(-123, -22)).toBe(-145)
  })

})