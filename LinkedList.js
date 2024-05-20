class Node
{
    constructor(value)
    {
        this.value=value
        this.next=null
        
    }
}

class LinkList
{
    constructor()
    {
        this.head=null
        this.size=0
    }
    add(element)
    {
        var node=new Node(element)
        if(this.head==null) 
            this.head=node
        else
        {
           let curr=this.head
            while(curr.next)
            {
                curr=curr.next
            }
            curr.next=node
        }
        this.size++
        
    }
    printL()
    {
       let curr=this.head
       //console.log(curr)
       try{
        while(curr.next)
        {
            console.log(curr)
            curr=curr.next
            
        }
       }
       catch(error)
       {
           console.log('no element to print')
       }
    }
    removeNode(index)
    {
        let curr=this.head,prev=curr,itrt=0
        if(index==0)
        {
            this.head=curr.next
        }
        else
        {
        while(itrt<index-1)
        {
            
                prev=curr
                curr=curr.next
        } 
        prev.next=curr.next
        }
        this.size--
        
        
    }
    
}

var a=new LinkList()
//console.log(a.printL())
//console.log(chce)
let i=0,act=parseInt(prompt('enter number of actions to perform'))
while(i<act)
{
    chce=parseInt(prompt('Enter your choice 1.adding element 2.remove element 3.search 4.end'))
switch(chce)
{
    case 1:let elemt=parseInt(prompt('Enter elemt to insert'))
        a.add(elemt)
        i++
        a.printL()
        break;
    case 2:a.removeNode(parseInt(prompt('Enter index of elemt to remove')))
    a.printL()
    i++
    break;
    case 3:i=act
        break
}
}

//
    
