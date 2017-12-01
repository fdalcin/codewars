export class SingletonCounter {
  private counter;
  private static instance: SingletonCounter;
  
  private constructor() {
    this.counter = 0;
  }
  
  public static getInstance() {
    if (!SingletonCounter.instance) {
      SingletonCounter.instance = new SingletonCounter();
    }
    
    return SingletonCounter.instance;
  }
  
  inc() {
    return this.counter += 1;
  }
}
