/**
 * Triple A
 * A - Arrange
 * A - Act
 * A - Assert
 * 
 * it() - it is used to write test case
 * describe() - it is a method provided by jasmine to create test suit
 * 
 */

 import { Calculator } from "./calculator"

 describe('calculator class', () => {
     it('getArea should be equal to 100 when input will be 50, 2', () => {
         
         // Arrange
         const calculator = new Calculator()
 
         // act
         const actualResult =  calculator.getArea(50, 2);
 
         // assert
         const expectedResult = 100
         expect(actualResult).toBe(expectedResult)
     })    
 
     it('getArea should be equal to 100 when input will be 50, 50', () => {
         
         // Arrange
         const calculator = new Calculator()
 
         // act
         const actualResult =  calculator.getArea(50, 50);
 
         // assert
         const expectedResult = 2000
         expect(actualResult).toBeGreaterThan(expectedResult)
     })        
 })
 
 describe('test currencies', () => {
     it('should return the support currencies', () => {
         const calculator = new Calculator();
         const currencies = calculator.getCurrencies();
         expect(currencies).toContain('USD')
         expect(currencies).toContain('AUD')
         expect(currencies).toContain('EUR')
         expect(currencies).toContain('INR')
     })
 })
 