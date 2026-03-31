export class NTree<T>
{
    root: NNode<T>;

    constructor(val:T)
    {
        this.root = new NNode<T>(null, val);
    }

    insert(value: T, comparison: (left: T, right: T) => boolean)
    {
        return false;
    }


}

export class NNode<T>
{
    
    data:T;
    parent:NNode<T>|null;
    nodes: NNode<T>[] = [];
    constructor(parent:NNode<T>|null, data:T = null as T)
    {
        this.parent = parent;
        this.data = data;
    }
}