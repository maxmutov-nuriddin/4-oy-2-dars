//test 1
// let obj = new Map([
//   ['a', 1],
//   ['b', 2],
//   ['c', 3],
//   ['d', 4]
// ]);

// function deleteMany(...keys) {
//   for (let key of keys) {
//     obj.delete(key);
//   }
//   return obj;
// }

// console.log(deleteMany('a', 'c'));

//test 2
// function mapSum(obj) {
//   let sum = 0;
//   for (let value of obj.values()) {
//     sum += value;
//   }
//   return sum;
// }

// let obj = new Map([
//   ['a', 2],
//   ['b', 5],
//   ['c', 3]
// ]);

// console.log(mapSum(obj)); 

//test 4
// function getSize(map) {
//   let size = 0;
//   for (let _ of map) {
//     size++;
//   }
//   return size;
// }

// let obj = new Map([
//   [{id: 1}, 'John'],
//   [{id: 2}, 'Jane'],
//   [{id: 3}, 'Alice']
// ]);

// console.log(getSize(obj));

//test 5
// function setUnion(set1, set2) {
//   let result = new Set(set1);
//   for (let item of set2) {
//     result.add(item);
//   }
//   return result;
// }

// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([2, 3, 4]);

// console.log(setUnion(set1, set2));

//test 7
// function checkSetSubset(set1, set2) {
//   for (let item of set1) {
//     if (!set2.has(item)) {
//       return false;
//     }
//   }
//   return true;
// }

// let set1 = new Set([1, 2]);
// let set2 = new Set([1, 2, 3, 4]);

// console.log(checkSetSubset(set1, set2));

//test 8
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// let arr = [1, 2, 2, 3, 4, 4, 5];

// console.log(removeDuplicates(arr));

//test 9
// function mergeArr(arr1, arr2) {
//   return [...arr1, ...arr2];
// }

// let arr1 = [1, 5, 8];
// let arr2 = [7, 9, 10];

// console.log(mergeArr(arr1, arr2));

// test 10
// function concatArrays(...arrays) {
//   return [].concat(...arrays);
// }

// console.log(concatArrays([1, 2], [3, 4], [5, 6]));
