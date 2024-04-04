import { Calculator, Count } from "../services/Calculator"


type Response = {
    success: unknown,
    error: unknown
}

export interface CalculatorRepository {
    add (count: Count): Response
    subtract (count: Count): Response
    multiply (count: Count): Response
    divide (count: Count): Response
    result (count : Count): Response
}
