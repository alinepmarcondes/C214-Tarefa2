import { Count } from "../services/Calculator";
import { CalculatorRepository } from "../repository/CalculatorRepository";

export class CalculatorAdapter implements CalculatorRepository {
    
    result: number;

    constructor() {
        this.result = 0;
    }

    add(count: Count) {
        try {
          this.result = count.num_a + count.num_b;
          return {
            success: this.result,
            error: null
          };
        } catch (error) {
          return {
            success: null,
            error: 'Cannot add'
          };
        }
      }

      subtract(count: Count) {
        try {
          this.result = count.num_a - count.num_b;
          return {
            success: this.result,
            error: null
          };
        } catch (error) {
          return {
            success: null,
            error: 'Cannot subtract'
          };
        }
      }
      
      multiply(count: Count) {
        try {
          this.result = count.num_a * count.num_b;
          return {
            success: this.result,
            error: null
          };
        } catch (error) {
          return {
            success: null,
            error: 'Cannot multiply'
          };
        }
      }
      
      divide(count: Count) {
        try {
          if (count.num_b !== 0) {
            this.result = count.num_a / count.num_b;
            return {
              success: this.result,
              error: null
            };
          } else {
            throw new Error("Division by zero is not allowed");
          }
        } catch (error) {
          return {
            success: null,
            error: 'Cannot divide'
          };
        }
      }
      

}