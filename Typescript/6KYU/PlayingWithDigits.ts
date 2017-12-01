export class G964 {

    public static digPow = (n, p) => {
        const sumOfSuccessivePowers = n.toString().split('').reduce((sum, value) => sum + Math.pow(Number(value), p++), 0);
        
        const k = sumOfSuccessivePowers / n;
        
        return Number.isInteger(k) ? k : -1;
    }
}