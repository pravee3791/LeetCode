import Log from "../utility/console.js";
const Node = function (val) {
    this.val = val;
    this.next = null;

}
var MyLinkedList = function () {
    this.head = null;
    this.size = 0;

};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    if (this.head == null) {
        const _node = new Node(val);
        this.head = _node;
    }
    else {
        const _node = new Node(val);
        _node.next = this.head;
        this.head = _node;
    }
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let i = 1;
    let currentNode ;
    while (i <= this.size) {
        if(i == 1){currentNode = this.head}
        else {currentNode = currentNode.next};
        if (i == this.size) {
            const _node = new Node(val);
            currentNode.next = _node;
           
        }
        i++;
    }
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let i = 1;
    let currentNode, prevNode, nextNode ;
    while (i <= this.size) {
        if(i == 1){
            prevNode =this.head;
            currentNode = this.head;
            nextNode = this.head.next 
            console.log(`prevNode:`)
            console.log(prevNode)

            console.log(`currentNode:`)
            console.log(currentNode)
            
            console.log(`nextNode:`)
            console.log(nextNode)
        }
        else if(i== index){
            const node = new Node(val)
        }
        else {
            prevNode = currentNode;
            currentNode = nextNode.next;
            nextNode = currentNode.next;
        };
        i++;
    }
    // this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {

};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
var obj = new MyLinkedList();
obj.addAtHead(100);
obj.addAtTail(199);
obj.addAtIndex(2,101);
Log(obj)