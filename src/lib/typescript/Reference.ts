export class Reference<T>
{
    current : T;
    constructor(val = null as T)
    {
        this.current = val;
    }
}