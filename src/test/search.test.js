import search from "../leetcode/binarysearch";
const nums = [44, 6, 7, 3, 14], target = 3;
describe('testing the search functionality ', () => {
  test('should return -1 if the value is not in array', () => {
    const nums = [-1, 0, 3, 5, 9, 12], target = 2;
    expect(search(nums, target)).toBe(-1)
  })
  test('should return -1 if the value is not in array', () => {
    const nums = [5], target = -5;
    expect(search(nums, target)).toBe(-1)
  })

  test('should return the position of the value if it is in array', () => {
    const nums = [-1, 0, 3, 5, 9, 12], target = 9;
    expect(search(nums, target)).toBe(4)
  })
 test('should return the position of the value if it is in array', () => {
    const nums = [5], target = 5;
    expect(search(nums, target)).toBe(0)
  })


})