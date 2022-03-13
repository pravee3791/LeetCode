// /**
//  * Linked List funtions for LeetCode
//  */

// import chalk from "chalk";
// const log = console.log();
// function ListNode(val, next) {
//     this.val = (val === undefined ? 0 : val)
//     this.next = (next === undefined ? null : next)
// }
// function makeArrayToList(arr1) {
//     // Marks the first node
//     var ln = null;
//     // Used to reference the next node each time
//     var next = null;
//     for (var i = 0; i < arr1.length; i++) {
//         console.log(chalk.red(i));
//         var e = parseInt(arr1[i]);
//         if (ln == null) {
//             ln = new ListNode(e);
//             console.log(chalk.blue(`First Linked Node`))
//             console.log(chalk.blackBright(JSON.stringify(ln)))
//             next = ln;
//             continue;
//         }
//         next.next = new ListNode(e);

//         next = next.next;
//     }
//     return ln;
// }

// const array = [9, 4, 3, 55]
// makeArrayToList(array);

// console.log(makeArrayToList(array))

const Node = function (val, next) {
   this.val = val;
   this.next = next 
}
const arrayForLinkedList = [3,4,5]
for(var i in arrayForLinkedList){
    console.log(i)
}
const node1 = new Node(1,null)
console.log(node1);
