import { Count } from "../models/Calc";
import { CalculatorRepository } from "../repository/CalculatorRepository";
import { CalculatorInt } from "./interfaces/Calculator";

export class Calculator implements CalculatorInt{
  private calculatorAdapter: CalculatorRepository
  constructor(calculatorRepository : CalculatorRepository){
    this.calculatorAdapter = calculatorRepository
  }

  add(count: Count): number | Error {
    try {
      const response = this.calculatorAdapter.add(count)
      console.log(response)
      return count.num_a + count.num_b;
    } catch (error) {
      return new Error(JSON.stringify(error))
    }
  }

  subtract(count: Count): number | Error {
    try {
        return count.num_a - count.num_b;
    } catch (error) {
      return new Error(JSON.stringify(error))
    }
  }

  multiply(count: Count): number | Error {
    try {
      return count.num_a * count.num_b;
    } catch (error) {
      return new Error(JSON.stringify(error))
    }
    }

  divide(count: Count): number | Error {
    try {
      if (count.num_b !== 0) {
        return count.num_a / count.num_b;
      } else {
        throw new Error("Division by zero is not allowed");
      }
    } catch (error) {
      return new Error(JSON.stringify(error))
    }
  }
}

export { Count };
