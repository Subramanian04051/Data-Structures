//Queue implementation using linkedlist
class Node
{
    constructor(element)
    {
        this.element=element
        this.next=null
    }
}

class Queue
{
    constructor()
    {
        
        this.front=null
        this.rear=null
        this.size=0
    }
    
    Enqueue(element)
    {
        var node=new Node(element)
        if(this.rear==null)
        {
            this.front=node
            this.rear=node
        }
        else
        {
        while(this.rear.next)
        {
            this.rear=this.rear.next
        }
        this.rear.next=node
        this.rear=node
        this.rear.next=null
        this.size++   
        //console.log(this.rear)
        }
        
    }
    deQueue()
    {
        if(this.isEmpty())
        {
            console.log('nothing to dequeue')
            this.rear=null
        }
        else
        {
            let val=this.front.element
            //console.log(val)
            this.front=this.front.next
            return val
        this.size--    
        }
        
    }
    isEmpty()
    {
        return this.front==null
    }
    printall()
    {
        if(!this.isEmpty())
        {
        let curr=this.front
        while(curr)
        {
            console.log(curr.element)
            curr=curr.next
            
        }    
        }
        else
        {
            console.log('empty queue')
        }
        
    }
    
        
}

const a =new Queue()
a.Enqueue(1)
a.Enqueue(2)
a.Enqueue(3)
a.Enqueue(4)
a.deQueue()
a.printall()
//console.log(a)
