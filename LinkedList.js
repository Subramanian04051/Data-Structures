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
            curr=this.head
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
    
}

var a=new LinkList()
//console.log(a.printL())
//console.log(chce)
let i=0,act=parseInt(prompt('enter number of actions to perform'))
while(i<act)
{
    chce=parseInt(prompt('Enter your choice 1.adding element 2.printing element 3.end'))
switch(chce)
{
    case 1:let elemt=parseInt(prompt('Enter elemt to insert'))
        a.add(elemt)
        i++
        //a.prntLst()
        break;
    case 2:a.printL()
    i++
    break;
    case 3:i=act
        break
}
}

//
    
