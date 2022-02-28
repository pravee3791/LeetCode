const node = function(data){
    this.data = data;
    this.next = null;
}

const LinkeList = function(head){
    this.head = head;
}

const node1 = new node(100);
console.log(node1)
const node2 = new node(200);
node1.next = node2;

const newLinkedList = new LinkeList(node1)
console.log(newLinkedList)