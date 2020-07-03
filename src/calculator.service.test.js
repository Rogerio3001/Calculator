import React from 'react'
import ReactDom from 'react-dom'
import CalculatorService from './calculator.service'

describe('Test CalculatorService', () => {
    const [ calculate, SUM, SUBS, DIV, MULT ] = CalculatorService()

    it('shoud be 1 + 4 equal to 5.', () => {
        let sum = calculate(1, 4, SUM)
        expect(sum).toEqual(5)
    })
    it('shoud be 1 - 4 equal to -3.', () => {
        let subs = calculate(1, 4, SUBS)
        expect(subs).toEqual(-3)
    })
    it('shoud be 1 / 4 equal to 0.25.', () => {
        let div = calculate(1, 4, DIV)
        expect(div).toEqual(0.25)
    })
    it('shoud be 1 * 4 equal to 4.', () => {
        let mult = calculate(1, 4, MULT)
        expect(mult).toEqual(4)
    })
    it('shoud be return 0 for invalid operations.', () => {
        let mult = calculate(1, 4, '%')
        expect(mult).toEqual(0)
    })
})