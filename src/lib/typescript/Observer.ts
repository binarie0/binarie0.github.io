export class Observer<T>
{
    _Value:T;
    constructor(val = undefined as T)
    {
        this._Value = val;
    }

    get(){ return this._Value;}
    set(val:T) {
        if (this._Value != val)
        {
            this._Value = val;
        }
    }

    
}