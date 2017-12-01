export class G964 {
  public static listSquared = (m, n) => {
    let results = [];
      
    for (let number = m; number <= n; ++number) {
      const sum = G964.sumSquared(G964.getDivisors(number));
      
      if(G964.isSquare(sum)) results.push([number, sum]);
    }
    
    return results;
  }
  
  public static getDivisors = (number) => {
    let divisors = [];
  
    for (var i = 1; i <= number / 2; ++i) {
      if (number % i) continue;
  
      divisors.push(i);
    }
  
    divisors.push(number);
    
    return divisors;
  }
  
  public static sumSquared = (numbers) => {
    return numbers.reduce((sum, n) => sum + n * n, 0);
  }
  
  public static isSquare = (value) => {
    return Number.isInteger(Math.sqrt(value));
  }
}