import searchInsert from "../leetcode/35.searchinsert";
describe('test insert search ', () => {
    test('should return the index if the target is found. ', () => {
        const nums = [1, 3, 5, 6], target = 5;
        expect(searchInsert(nums, target)).toBe(2);
    })

    test('return the index where it would be if it were inserted in order. ', () => {
        constnums = [1,3,5,6], target = 2;
        expect(searchInsert(nums, target)).toBe(1);
    })

test('return the index where it would be if it were inserted in order. ', () => {
        constnums = [1,3,5,6], target = 7;
        expect(searchInsert(nums, target)).toBe(4);
    })
})