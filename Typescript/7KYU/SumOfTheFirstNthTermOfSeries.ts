export function SeriesSum(n:number):string
{  
  return seriesSumRecursive(n, 1).toFixed(2);
}

function seriesSumRecursive(n: number, d: number): number {
  return n === 0 ? 0 : 1 / d + seriesSumRecursive(n - 1, d + 3);
}