export class G964 {
    public static findNb(m: number): number {
      return G964.findNbRecursive(m - Math.pow(1, 3), 1);
    }
    
    private static findNbRecursive = (m: number, n: number): number => {
      if (m > 0) return 1 + G964.findNbRecursive(m - Math.pow(n + 1, 3), n + 1);

      return m ? -n : 1;
    }
}
