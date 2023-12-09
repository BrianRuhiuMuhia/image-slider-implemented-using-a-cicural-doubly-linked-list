const images=[
    "./images/a.jpg",
    "./images/b.jpg",
    "./images/c.jpg",
    "./images/d.jpg",
    "./images/e.jpg"
   ]
   
class LinkedList{
    constructor()
    {
        this.head=null
        this.tail=null
        this.size=0
    }
    printSize()
    {
        return this.size;
    }
    prepend(data)
    {
const node=new Node(data)
if(this.head==null)
{
   this.head=node
   this.tail=node
}
else{
node.next=this.head
this.head.prev=node
this.head=node
this.head.prev=this.tail
this.tail.next=this.head
}
this.size++
    }
    append(data)
    {
        const node=new Node(data)
        if(this.tail===null)
        {
            this.head=node
            this.tail=node
        }
        else{
            this.tail.next=node
            node.prev=this.tail
            this.tail=this.tail.next
            this.tail.next=this.head
        }
        this.size++
    }
    printNodes()
    {
        let curr=this.tail
        while(curr)
        {
            console.log(curr.data)
            curr=curr.prev
if(curr===this.tail)
{
    break
}
        }
        
    }
peekHead()
{
    return this.head
}
peekTail()
{
    return this.tail
}
insertNode(data,pos)
{
    let curr = this.head;

    if(pos === 0) {
        this.prepend(data);
    } else if(pos === this.size) {
        this.append(data);
    } else {
        for(let index = 0; index < pos; index++) {
            curr = curr.next;
        }
        let temp = curr.next;
        curr.next = node;
        node.prev = curr;
        node.next = temp;
        temp.prev = node;
        this.size++;
}
}
}
class Node{
    constructor(data)
    {
        this.data=data
        this.next=null
        this.prev=null
    }
}
const ll=new LinkedList()
images.forEach((image)=>{
    ll.prepend(image)
})
const prev=document.querySelector(".previous")
const next=document.querySelector(".next")
const img=document.querySelector("img")
let curr=ll.head
changeImage()
prev.addEventListener("click",()=>{
    curr=curr.prev
    changeImage()
})
next.addEventListener("click",()=>{
curr=curr.next
changeImage()
})
function changeImage()
{
    img.setAttribute("src",curr.data)
}
const imagesSection=document.querySelector(".image-section")
const reverseBtn=document.querySelector(".reverse")
function createImage(src)
{
const imageTag=document.createElement("img")
imageTag.setAttribute("src",src)
imagesSection.appendChild(imageTag)

}
function createImages()
{
    let curr=ll.head
    while(curr)
    {
        createImage(curr.data)
        if(curr===ll.tail)
        {
        
            break
        }
        curr=curr.next
    }
    const br=document.createElement("br")
    imagesSection.appendChild(br)
}
function reverse(list) {
    let curr = list.head;
    let prev = null;

    do {
        let next = curr.next;
        curr.next = prev;
        curr.prev = next;
        prev = curr;
        curr = next;
    } while (curr !== list.head)

   
    list.tail = list.head;
    list.head = prev;

    
    list.head.prev = list.tail;
    list.tail.next = list.head;

    console.log(list);
}

createImages()
reverseBtn.addEventListener("click",()=>{
    reverse(ll)
    createImages()
})