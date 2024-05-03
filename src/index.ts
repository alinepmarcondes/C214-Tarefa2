import readline from 'readline'
import { promisify } from 'util'
import { Count, Calculator } from './services/Calculator'
import { CalculatorAdapter } from './adapters/CalculatorAdapter'

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const userInput = promisify(reader.question).bind(reader)

async function getUserInput (prompt: string): Promise<any> {
  return await userInput(prompt)
}

const calculatorAdapter = new CalculatorAdapter()
const calc = new Calculator(calculatorAdapter)

async function addTwoNumbers () {
  const newCount: Count = {
      num_a: 0,
      num_b: 0
  }

  newCount.num_a = await getUserInput('Enter the first number: ')
  newCount.num_b = await getUserInput('Enter the second number: ')

  calc.add(newCount)
}

async function subTwoNumbers () {
  const newCount: Count = {
      num_a: 0,
      num_b: 0
  }

  newCount.num_a = await getUserInput('Enter the first number: ')
  newCount.num_b = await getUserInput('Enter the second number: ')

  calc.subtract(newCount)
}

async function mulTwoNumbers () {
  const newCount: Count = {
      num_a: 0,
      num_b: 0
  }

  newCount.num_a = await getUserInput('Enter the first number: ')
  newCount.num_b = await getUserInput('Enter the second number: ')

  calc.multiply(newCount)
}

async function divTwoNumbers () {
  const newCount: Count = {
      num_a: 0,
      num_b: 0
  }

  newCount.num_a = await getUserInput('Enter the first number: ')
  newCount.num_b = await getUserInput('Enter the second number: ')

  calc.divide(newCount)
}

async function startCalculator () {
  const userChoise = await getUserInput('1- Add two numbers; 2- Subtract two numbers; 3- Multiply two numbers; 4- Divide two numbers; 0- Exit: ')

  switch (userChoise) {
    case '0':
      reader.close()

      return
    case '1':
      console.log('Add result', await addTwoNumbers())
      reader.close()
      return
    case '2':
      console.log('Subtraction result', await subTwoNumbers())
      reader.close()
      return
    case '3':
      console.log('Multiply result', await mulTwoNumbers())
      reader.close()
      return
    case '4':
      console.log('Divide result', await divTwoNumbers())
      reader.close()
      return
    default:
      reader.close()
  }
}

startCalculator()