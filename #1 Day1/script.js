import fs from 'fs'
import path from 'path'

let numbers = fs.readFileSync(path.resolve('./', 'inputFinal.txt'), 'utf8')

const getCaloriesByElfes = () => {
  const splitByElfes = numbers.split('\n\n')

  const getAdditionCaloriesbyElfes = splitByElfes.map((elfe) => {
    const splitByCalories = elfe.split('\n')

    const additionCaloriesByElfes = splitByCalories.reduce((acc, curr) => {
      return Number(acc) + Number(curr)
    }, 0)
    return additionCaloriesByElfes
  })

  let sortedCaloriesByElfes = getAdditionCaloriesbyElfes.sort((a, b) => b - a)
  const sumFirstThree = sortedCaloriesByElfes
    .slice(0, 3)
    .reduce((acc, curr) => {
      return acc + curr
    }, 0)
  return sumFirstThree
  //   const [firstElfes, secondElfes, thirdElfes] = sortedCaloriesByElfes
  //   return firstElfes + secondElfes + thirdElfes
}

console.log(getCaloriesByElfes())
