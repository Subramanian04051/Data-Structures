class Node
{
    constructor(element)
    {
        this.element=element
        this.left=null
        this.right=null
    }
}

class BinaryHeap
{
    constructor()
    {
        this.size=0
        this.root=null
    }
    add(element)
    {
        const node=new Node(element)
        if(this.root==null)
        {
            this.root=node
        }

else
{
    this.insertNode(this.root,node)
    
}
        
    }
    insertNode(root,node)
    {
       // console.log()
        if(root.left==null)
        {
           root.left=node 
        }
        else if(root.right==null)
        {
           root.right=node 
        }
        else
        {
            console.log('entered else')
            console.log(root.left)
            //if(this.root.left==null)
            this.insertNode(root.left,node)
           this.insertNode(root.right,node)
          //  this.insertNode(this.root.right,node)
        }
        
    }
}

var mh=new BinaryHeap()
mh.add(1)
mh.add(2)
mh.add(3)
mh.add(4)
mh.add(5)
mh.add(10)
//mh.Traversal(mh.root)
console.log(mh.root)
