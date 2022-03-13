/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const arrayToLink = function(arr=[]){
   const linkedList = arr.reduceRight((list,val)=>{
        if(list == null){list = new ListNode(val,null)}        
        list = new ListNode(val,list)
        return list
   },null) 
   return linkedList;
}
var isPalindrome = function(head) {
    console.log(head)
};

const a = [1,2,2,1];
const linkedList = arrayToLink(a);
console.log(isPalindrome(linkedList))