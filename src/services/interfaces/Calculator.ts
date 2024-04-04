import { Count } from "../../models/Calc";

export interface CalculatorInt {
    add: (count: Count) => number | Error
    subtract: (count: Count) => number | Error
    multiply: (count: Count) => number | Error
    divide: (count: Count) => number | Error
}