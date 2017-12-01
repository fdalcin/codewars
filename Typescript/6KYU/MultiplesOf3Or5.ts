export class Challenge {
  static solution(number) {
    let sum = 0;
    
    for (let i = 3; i < number; i++) {
      if (!isMultipleOfThreeOrFive(i)) continue;
      
      sum += i;
    }
    
    return sum;
  }
}

const isMultipleOf = (number, of) => number % of === 0;

const isMultipleOfThreeOrFive = (number) => isMultipleOf(number, 3) || isMultipleOf(number, 5);