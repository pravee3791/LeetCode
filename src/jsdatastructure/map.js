/**
 * @author Praveen Kumar Yadav
 * @email praveen3791@gmail.com
 * @create date 2022-01-05 20:17:46
 * @modify date 2022-01-05 20:17:46
 * @desc Example of usage of Map in JS and its related methods
 */
/**
 * Creation of Map
 * The Map object holds key-value pairs and remembers the original insertion order of the keys. 
 * Any value (both objects and primitive values) may be used as either a key or a value.
 */

const userMap = new Map();
// console.log(userMap);

/**
 * get and set Methods
 */
userMap.set(`name`,`Praveen`);
// console.log(userMap);

const name = userMap.get('name');
// console.log(name);

/**
 * size and delete 
 */
// console.log(userMap.size);
userMap.delete('name');
// console.log(userMap.size);







