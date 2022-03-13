function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    console.log(l1);
    console.log(l2)
    let addTwoNumbers=[]
    for (let i = 0; i < l1.length; i++) {
        addTwoNumbers.push(l1[i]+ l2[i])
    }
    return addTwoNumbers;
};
// const l1 = new ListNode(2,4)
const l1 = [2,4,3];
const l2 = [5, 6, 4]
console.log(addTwoNumbers(l1, l2))
