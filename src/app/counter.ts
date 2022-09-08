export class CounterComponent{
    public count: number =0;

    public increment(): number{
        this.count++;
        return this.count;
    }

    public decrement(): number{
        this.count--;
        return this.count;
    }
}