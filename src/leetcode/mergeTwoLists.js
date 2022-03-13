/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
import {logObjectInDepth}  from "./utility/console";

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


var mergeTwoLists = function (l1, l2) {
    let mergedList = new ListNode(undefined,undefined)
    let i, j;
    while (l1 || l2) {
        if (l1.val > l2.val) {
             mergedList = new ListNode(l1.val,mergedList) 
             l1 = l1.next;
        } else {
            mergedList = new ListNode(l2.val,mergedList)
            l2 = l2.next;
        }   
    }
    return mergedList;
};
const list1 = arrayToLink([1, 2, 4]), list2 = arrayToLink([1, 3, 4]);
console.log(mergeTwoLists(list1,list2))

// Output: [1,1,2,3,4,4]