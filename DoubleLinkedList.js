class Node
{
    constructor(element)
    {
        this.next=null
        this.prev=null
        this.element=element
    }
}
class DoublyLinkList
{
    constructor()
    {
        this.size=null
        this.head=null
    }
    add(element)
    {
        var node=new Node(element)
        if(this.head==null)
        {
            this.head=node
            this.head.next=null
            this.head.prev=null
            
            
            
            //this.head.prev=null
        }
        else
        {
            var curr=this.head
            var prev=curr
            while(curr.next)
            {
                prev=curr
                curr=curr.next
                
            }
            node.next=curr.next
            curr.next=node
            node.prev=prev
            
          //  prev.next=node
            
            
        }
        
    }
    Traverse()
    {
        let curr=this.head
        while(curr)
        {
            console.log(curr)
            curr=curr.next
            
        }
    }
}
var dl=new DoublyLinkList()
dl.add(1)
dl.add(2)
dl.add(3)
dl.add(4)
dl.Traverse()
//console.log(dl.head.next.next.prev)
