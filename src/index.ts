import readline from 'readline'
import { promisify } from 'util'
import { Count, Calculator } from './services/Calculator'

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const userInput = promisify(reader.question).bind(reader)

async function getUserInput (prompt: string): Promise<any> {
  return await userInput(prompt)
}

const calc = new Calculator()

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
      await addTwoNumbers()
      console.log('Add result', calc.getResults())
      reader.close()
      return
    case '2':
      await subTwoNumbers()
      console.log('Subtraction result', calc.getResults())
      reader.close()
      return
    case '3':
      await mulTwoNumbers()
      console.log('Multiply result', calc.getResults())
      reader.close()
      return
    case '4':
      await divTwoNumbers()
      console.log('Divide result', calc.getResults())
      reader.close()
      return
    default:
      reader.close()
  }
}

startCalculator()