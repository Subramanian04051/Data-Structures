class Node{
    constructor(ele)
    {
        this.element=ele
        this.next=null
    }
}

class Stack
{
    constructor()
    {
        //this.top=null
        this.head=new Node(0)
        this.size=0
    }
    push(ele)
    {
        var node=new Node(ele)
        
            
            node.next=this.head.next
            this.head.next=node
            this.size+=1
            
            //console.log('head-->'+JSON.stringify(this.head))
            
            //this.top.next=
    }
    printAll()
    {
        let top=this.head.next
        while(top)
        {
            console.log(top.element)
            top=top.next
        }
    }
    pop()
    {
        if(!isEmpty())
        {
        let top=this.head.next
        this.head.next=top.next
        this.size-=1    
        }
        else
        {
            console.log('stack empty')
        }
        
        //console.log(this.head)
    }
    peek()
    {
        let top=this.head.next
        return top.element
    }
    isEmpty()
    {
        return this.size==0
    }
}
var stck=new Stack()
stck.push(1)
stck.push(2)
stck.push(3)
stck.push(4)
stck.push(5)
stck.push(6)
stck.printAll()
console.log('\n')
stck.pop()
//
stck.printAll()
console.log('\n')
console.log(stck.peek())
