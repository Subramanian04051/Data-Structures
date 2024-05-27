class BinaryHeap
{
    constructor()
    {
        this.arr=[]
    }
    Parent(i)
    {
        return ((i-1)/2)
    }
    getMin()
    {
        return this.arr[0]
    }
    insert(element)
    {
        this.arr.push(element)
        let i=this.arr.length-1
        console.log(i)
        while(i>0 && this.arr[this.Parent(i)]>this.arr[i])
        {
            let p=this.Parent(i),temp
            console.log(p)
            temp=this.arr[i]
            this.arr[i]=this.arr[p]
            this.arr[p]=temp
            //this.arr[i],this.arr[p]=this.swap(this.arr[p],this.arr[i])
            i=p
        }
    }
}


var bt=new BinaryHeap()
bt.insert(3)
console.log(bt.arr)
bt.insert(2)
console.log(bt.arr)
bt.insert(1)
bt.insert(1)
console.log(bt.arr)
console.log(bt.getMin())
