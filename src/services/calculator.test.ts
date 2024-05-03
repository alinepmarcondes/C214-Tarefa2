import { Calculator } from './Calculator';
import { CalculatorRepository } from '../repository/CalculatorRepository';
import { Count } from "../models/Calc";

const makeRepositoryStub = (): CalculatorRepository => {
  class CalculatorStub implements CalculatorRepository {
    result: number
    constructor (){
      this.result = 0
    }

    add (count : Count) {
      return {
        success: true,
        error: null
      }
    }

    subtract (count : Count) {
      return {
        success: this.result,
        error: null
      }
    }

    multiply (count : Count) {
      return {
        success: this.result,
        error: null
      }
    }

    divide (count : Count) {
      return {
        success: this.result,
        error: null
      }
    }
  }
  return new CalculatorStub()
}

describe('Calculator', () => {
  let calculator: Calculator;

  test('Successfully add two numbers', () => {
    const repository = makeRepositoryStub()
    const calculatorInstance = new Calculator(repository)
    expect(calculatorInstance.add({ num_a: 5, num_b: 3 })).toEqual(8);
  });

  test('Successfully subtract two numbers', () => {
    const repository = makeRepositoryStub()
    const calculatorInstance = new Calculator(repository)
    expect(calculatorInstance.subtract({ num_a: 10, num_b: 3 })).toEqual(7);
  });

  test('Successfully multiply two numbers', () => {
    const repository = makeRepositoryStub()
    const calculatorInstance = new Calculator(repository)
    expect(calculatorInstance.multiply({ num_a: 2, num_b: 3 })).toEqual(6);
  });

  test('Successfully divide two numbers', () => {
    const repository = makeRepositoryStub()
    const calculatorInstance = new Calculator(repository)
    expect(calculatorInstance.divide({ num_a: 20, num_b: 5 })).toEqual(4);
  });
  
});
