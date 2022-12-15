import {colorDec, deleteDec, numberF} from './App'

describe("Testing function deleteDec", () => {
    test("pass 1.2642325 return 1.26",() => {
        expect(deleteDec(1.2642325, 2)).toBe("1.26")
    })
    test("pass 1.264225 return 1.26422", () => {
        expect(deleteDec(1.264225, 5)).toBe("1.26422")
    }) 
})

describe("Testing function colorDec", () => {
    test("return string", () => {
        expect(typeof colorDec(1)).toBe("string")
    })
    test("pass positive number return green" , () => {
        expect(colorDec(1)).toBe("green")
    })
    test("pass negative number return red" , () => {
        expect(colorDec(-1)).toBe("red")
    })
})

test ("return string", () => {
    expect(typeof numberF.format(1000)).toBe("string")
})

