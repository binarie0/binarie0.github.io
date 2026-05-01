export class CallbackHandler<T>
{
    _callbacks: Array<(val: T) => void> = [];
    
    AddCallback(callback = (val:T) => {})
    {
        this._callbacks.push(callback);
    }

    Invoke(val:T)
    {
        this._callbacks.forEach((callback) => callback(val));
    }
}