export class G964 {
  public static perimeter = (n) => {
    const fibonaccis = Array.apply(null, {length: n + 1}).map((_, index) => fibonacci(index));
    
    return 4 * fibonaccis.reduce((sum, value) => sum + value, 0);
  }
}

const fibonacci = (n:number):number => {
  if(n <= 1) return 1;
  
  let fib = 1, previous = 1;

  for (let i = 2; i <= n; i++) {
    let t = fib;
    
    fib += previous;
    
    previous = t;
  }
  
  return fib;
}

//const fibonacci = (n:number):number => {
//  if(n === 0 || n === 1) return 1;
//  
//  return fibonacci(n - 1) + fibonacci(n - 2);
//}