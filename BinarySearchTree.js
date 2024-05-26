class Node
{
    constructor(elem)
    {
        this.elem=elem
        this.left=null
        this.right=null
    }
}

class BinaryTree
{
    constructor()
    {
        this.root=null
    }
    add(elem)
    {
        const node=new Node(elem)
        if(this.root==null)
        {
            this.root=node
        }
        else
        {
            this.insertNode(this.root,node)
        }
    }
    insertNode(root_node,node)
    {
        
       // console.log(root_node.elem)
        if(root_node.elem>node.elem)
        {
            if(root_node.left!=null)
                this.insertNode(root_node.left,node)
            //}
            else{
                root_node.left=node
            }
        }
        else
        {
            if(root_node.right!=null)
            {
                this.insertNode(root_node.right,node)
            }
            else{
                root_node.right=node
                //root_node=node
            }
        }
        
    }
    inOrderTraversal(root_node)
    {
        if(root_node!=null)
        {
            this.inOrderTraversal(root_node.left)
            console.log(root_node.elem)
            this.inOrderTraversal(root_node.right)
        }

    }
    Search(elem,root)
    {
if(root!=null)
{
    if(root.elem==elem)
    {
    console.log('match found'+root.elem)
   console.log(root)
    //return root
    }
    else if(root.elem>elem)
    {
       // console.log('inside else if')
        this.Search(elem,root.left)
    }
    else{
        //console.log('inside else')
        this.Search(elem,root.right)
    }
}
else{
    console.log(`root is null /element not found`)
    return null
}       

    }
   min(root_node)
   {
    
        if(root_node.left!=null)
        this.min(root_node.left)
    else{
        console.log(`Min--------------- ${root_node.elem}`)
    }
   }
   max(root_node)
   {
    
        if(root_node.right!=null)
        this.max(root_node.right)
    else{
        console.log(`Max-------------- ${root_node.elem}`)
    }
   }
}

var bt=new BinaryTree()
let n=10,add_elem=0,arr_elem=[]
 for(let i=0;i<n;i++)
{
    add_elem= Math.ceil(Math.random(n)*100)
    bt.add(add_elem)  
    arr_elem.push(add_elem)  
}
/* bt.add(1)
bt.add(2)
bt.add(3)
bt.add(4)
bt.add(4) */ 
bt.inOrderTraversal(bt.root)
bt.Search(arr_elem[1],bt.root)
//bt.upDate(2,20)
bt.min(bt.root)
bt.max(bt.root)
//console.log(bt)
