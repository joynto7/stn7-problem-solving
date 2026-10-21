/**
 * STN-7 Problem Solving Assessment — all 20 solutions in one file.
 *
 * Every problem keeps the exact function name and signature from the
 * assessment document. Run `node solution.js` to execute the test suite at
 * the bottom of this file (the examples from the document + extra edge cases).
 */

"use strict";

// =============================================================================
// Problem 1: Staircase
// Approach: row i (1..n) is (n - i) spaces followed by i '#'. Rows are joined
// with "\n" and never end with a space.
// Time O(n^2) (size of the output), extra space O(n^2) for the result.
// =============================================================================
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n) {
  if (!Number.isInteger(n) || n <= 0) return "";

  const rows = [];
  for (let i = 1; i <= n; i++) {
    rows.push(" ".repeat(n - i) + "#".repeat(i));
  }
  return rows.join("\n");
};

// =============================================================================
// Problem 2: Grading Students
// Approach: grades below 38 stay unchanged; otherwise round up to the next
// multiple of 5 when that difference is less than 3.
// Time O(n), space O(n) for the new array (the input is not modified).
// =============================================================================
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades) {
  return grades.map((grade) => {
    if (grade < 38) return grade;
    const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    return nextMultipleOf5 - grade < 3 ? nextMultipleOf5 : grade;
  });
};

// =============================================================================
// Problem 3: Time Conversion
// Approach: parse hh, mm, ss and the AM/PM suffix. 12 AM -> 00, 12 PM -> 12,
// any other PM hour + 12, any other AM hour unchanged.
// Time O(1), space O(1).
// =============================================================================
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s) {
  const match = /^(\d{2}):(\d{2}):(\d{2})\s*([AP]M)$/i.exec(String(s).trim());
  if (!match) throw new TypeError(`Invalid 12-hour time: "${s}"`);

  const [, hh, mm, ss, period] = match;
  let hours = Number(hh) % 12; // 12 becomes 0
  if (period.toUpperCase() === "PM") hours += 12;

  return `${String(hours).padStart(2, "0")}:${mm}:${ss}`;
};

// =============================================================================
// Problem 4: String Repeat
// Approach: append s to the result n times (a plain loop, equivalent to
// s.repeat(n)). n <= 0 returns "".
// Time O(n * |s|), space O(n * |s|).
// =============================================================================
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
};

// =============================================================================
// Problem 5: Reversed Strings
// Approach: Array.from splits by code point (so emoji / surrogate pairs stay
// intact), then reverse and join. The original string is never modified.
// Time O(n), space O(n).
// =============================================================================
/**
 * @param {string} str
 * @return {string}
 */
var solution = function (str) {
  return Array.from(str).reverse().join("");
};

// =============================================================================
// Problem 6: Sum of Positive
// Approach: add every value strictly greater than zero.
// Time O(n), space O(1).
// =============================================================================
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr) {
  let sum = 0;
  for (const value of arr) {
    if (value > 0) sum += value;
  }
  return sum;
};

// =============================================================================
// Problem 7: Grasshopper — Summation
// Approach: Gauss formula 1 + 2 + ... + num = num * (num + 1) / 2 instead of
// looping. Values below 1 have nothing to add, so they return 0.
// Time O(1), space O(1). (Exact while the result stays below 2^53.)
// =============================================================================
/**
 * @param {number} num
 * @return {number}
 */
var summation = function (num) {
  if (num < 1) return 0;
  return (num * (num + 1)) / 2;
};

// =============================================================================
// Problem 8: Convert a Boolean to a String
// Approach: map the boolean to one of the two string literals.
// Time O(1), space O(1).
// =============================================================================
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b) {
  return b ? "true" : "false";
};

// =============================================================================
// Problem 9: Fizz Buzz
// Approach: check divisibility by 15 (3 and 5) first, then 3, then 5.
// Time O(n), space O(n) for the result.
// =============================================================================
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(String(i));
  }
  return result;
};

// =============================================================================
// Problem 10: Running Sum of 1D Array
// Approach: keep a running total and write it into a new array.
// Time O(n), space O(n) for the result (the input is not modified).
// =============================================================================
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = new Array(nums.length);
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    result[i] = total;
  }
  return result;
};

// =============================================================================
// Problem 11: Richest Customer Wealth
// Approach: sum each customer's row and keep the maximum. No customers -> 0.
// Time O(m * n), space O(1).
// =============================================================================
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let richest = 0;
  for (const customer of accounts) {
    let wealth = 0;
    for (const amount of customer) wealth += amount;
    if (wealth > richest) richest = wealth;
  }
  return richest;
};

// =============================================================================
// Problem 12: Remove Duplicates from Sorted Array
// Approach: two pointers. `k` is the length of the unique prefix; each value
// different from the last unique value is written to nums[k].
// Time O(n), space O(1) (in-place).
// =============================================================================
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

// =============================================================================
// Problem 13: Contains Duplicate
// Approach: remember seen values in a Set and stop at the first repeat.
// Time O(n), space O(n).
// =============================================================================
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const seen = new Set();
  for (const value of nums) {
    if (seen.has(value)) return true;
    seen.add(value);
  }
  return false;
};

// =============================================================================
// Problem 14: Move Zeroes
// Approach: copy every non-zero value forward (keeping their order), then fill
// the remaining positions with 0. Modifies nums in-place and returns nothing.
// Time O(n), space O(1).
// =============================================================================
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums) {
  let insertAt = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertAt] = nums[i];
      insertAt++;
    }
  }
  for (let i = insertAt; i < nums.length; i++) {
    nums[i] = 0;
  }
};

// =============================================================================
// Problem 15: Merge Sorted Array
// Approach: fill nums1 from the back with the larger of the two current tails,
// so no valid element of nums1 is overwritten before it is used.
// Time O(m + n), space O(1) (in-place, returns nothing).
// =============================================================================
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // last valid element of nums1
  let j = n - 1; // last element of nums2
  let write = m + n - 1; // last position of nums1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[write] = nums1[i];
      i--;
    } else {
      nums1[write] = nums2[j];
      j--;
    }
    write--;
  }
  // anything left in nums1[0..i] is already in place
};

// =============================================================================
// Problem 16: 3Sum
// Approach: sort a copy, fix the smallest value nums[i], then move two pointers
// inward to find pairs summing to -nums[i]. Equal neighbours are skipped so
// every triplet is reported once. The input array is not modified.
// Time O(n^2), space O(n) for the sorted copy (excluding the output).
// =============================================================================
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const triplets = [];

  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] > 0) break; // the smallest value is positive: no more sums of 0
    if (i > 0 && sorted[i] === sorted[i - 1]) continue; // same first value

    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        triplets.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        right--;
        while (left < right && sorted[left] === sorted[left - 1]) left++;
        while (left < right && sorted[right] === sorted[right + 1]) right--;
      }
    }
  }
  return triplets;
};

// =============================================================================
// Problem 17: Plus One
// Approach: walk from the last digit; a 9 becomes 0 and carries, any other
// digit is incremented and we are done. If every digit carried, prepend 1.
// Time O(n), space O(n) for the result (the input array is not modified).
// =============================================================================
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  const result = [...digits];
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }
    result[i] = 0;
  }
  result.unshift(1); // e.g. [9, 9, 9] -> [1, 0, 0, 0]
  return result;
};

// =============================================================================
// Problem 18: Reverse String
// Approach: two pointers swap the outer characters and move toward the middle.
// Time O(n), space O(1) (in-place, returns nothing).
// =============================================================================
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }
};

// =============================================================================
// Problem 19: Length of Last Word
// Approach: scan from the end, skip trailing spaces, then count characters
// until the next space (or the start of the string).
// Time O(n), space O(1).
// =============================================================================
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === " ") i--;

  let length = 0;
  while (i >= 0 && s[i] !== " ") {
    length++;
    i--;
  }
  return length;
};

// =============================================================================
// Problem 20: Longest Common Prefix
// Approach: vertical scan — compare character `i` of the first string with the
// same position in every other string; stop at the first mismatch or at the
// end of any string. An empty array or any empty string gives "".
// Time O(S) where S is the total number of characters, space O(1) extra.
// =============================================================================
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  const first = strs[0];
  for (let i = 0; i < first.length; i++) {
    const char = first[i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return first.slice(0, i);
      }
    }
  }
  return first;
};

// =============================================================================
// Exports (so the functions can be imported elsewhere)
// =============================================================================
module.exports = {
  staircase,
  gradingStudents,
  timeConversion,
  repeatStr,
  solution,
  positiveSum,
  summation,
  booleanToString,
  fizzBuzz,
  runningSum,
  maximumWealth,
  removeDuplicates,
  containsDuplicate,
  moveZeroes,
  merge,
  threeSum,
  plusOne,
  reverseString,
  lengthOfLastWord,
  longestCommonPrefix,
};

// =============================================================================
// Tests — run with: node solution.js
// Each case is [description, actual, expected]; in-place problems check the
// modified array (and that the function returns nothing).
// =============================================================================
if (require.main === module) {
  const assert = require("node:assert/strict");

  // run an in-place function on a copy and return the modified array + return value
  const inPlace = (fn, input, ...rest) => {
    const arr = [...input];
    const returned = fn(arr, ...rest);
    return { arr, returned };
  };

  const suites = {
    "Problem 1: Staircase": [
      ["n = 4", staircase(4), "   #\n  ##\n ###\n####"],
      ["n = 1", staircase(1), "#"],
      ["n = 0 (edge)", staircase(0), ""],
      ["no trailing spaces", staircase(6).split("\n").every((row) => !row.endsWith(" ")), true],
      ["n rows, last row has n #", staircase(5).split("\n").at(-1), "#####"],
    ],
    "Problem 2: Grading Students": [
      ["[73, 67, 38, 33]", gradingStudents([73, 67, 38, 33]), [75, 67, 40, 33]],
      ["[84, 29, 57]", gradingStudents([84, 29, 57]), [85, 29, 57]],
      ["37 stays failing", gradingStudents([37]), [37]],
      ["multiples of 5 / 100", gradingStudents([40, 100, 99]), [40, 100, 100]],
      ["empty", gradingStudents([]), []],
    ],
    "Problem 3: Time Conversion": [
      ["07:05:45PM", timeConversion("07:05:45PM"), "19:05:45"],
      ["12:00:00AM", timeConversion("12:00:00AM"), "00:00:00"],
      ["12:30:45PM", timeConversion("12:30:45PM"), "12:30:45"],
      ["01:00:00AM", timeConversion("01:00:00AM"), "01:00:00"],
      ["11:59:59PM", timeConversion("11:59:59PM"), "23:59:59"],
      ["lower-case suffix", timeConversion("06:40:03am"), "06:40:03"],
    ],
    "Problem 4: String Repeat": [
      ['3, "ha"', repeatStr(3, "ha"), "hahaha"],
      ['0, "hello"', repeatStr(0, "hello"), ""],
      ['4, "a"', repeatStr(4, "a"), "aaaa"],
      ['2, "" (edge)', repeatStr(2, ""), ""],
    ],
    "Problem 5: Reversed Strings": [
      ['"world"', solution("world"), "dlrow"],
      ['"hello"', solution("hello"), "olleh"],
      ['"" (edge)', solution(""), ""],
      ["emoji kept intact", solution("ab😀"), "😀ba"],
    ],
    "Problem 6: Sum of Positive": [
      ["[1, -4, 7, 12]", positiveSum([1, -4, 7, 12]), 20],
      ["[-1, -2, 0, -5]", positiveSum([-1, -2, 0, -5]), 0],
      ["empty", positiveSum([]), 0],
      ["decimals", positiveSum([0.5, -1, 1.5]), 2],
    ],
    "Problem 7: Grasshopper — Summation": [
      ["num = 8", summation(8), 36],
      ["num = 1", summation(1), 1],
      ["num = 4", summation(4), 10],
      ["num = 100000", summation(100000), 5000050000],
    ],
    "Problem 8: Convert a Boolean to a String": [
      ["true", booleanToString(true), "true"],
      ["false", booleanToString(false), "false"],
      ["returns a string", typeof booleanToString(true), "string"],
    ],
    "Problem 9: Fizz Buzz": [
      ["n = 5", fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]],
      ["n = 15", fizzBuzz(15), ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]],
      ["n = 0 (edge)", fizzBuzz(0), []],
    ],
    "Problem 10: Running Sum of 1D Array": [
      ["[1, 2, 3, 4]", runningSum([1, 2, 3, 4]), [1, 3, 6, 10]],
      ["[1, 1, 1, 1, 1]", runningSum([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]],
      ["negatives", runningSum([3, -1, -2]), [3, 2, 0]],
      ["empty", runningSum([]), []],
    ],
    "Problem 11: Richest Customer Wealth": [
      ["[[1,2,3],[3,2,1]]", maximumWealth([[1, 2, 3], [3, 2, 1]]), 6],
      ["[[1,5],[7,3],[3,5]]", maximumWealth([[1, 5], [7, 3], [3, 5]]), 10],
      ["single customer", maximumWealth([[2, 8, 7]]), 17],
      ["no customers", maximumWealth([]), 0],
    ],
    "Problem 12: Remove Duplicates from Sorted Array": [
      ["[1, 1, 2] -> k", removeDuplicates([1, 1, 2]), 2],
      ["[1, 1, 2] -> prefix", (() => { const a = [1, 1, 2]; const k = removeDuplicates(a); return a.slice(0, k); })(), [1, 2]],
      ["[0,0,1,1,1,2,2,3,3,4] -> k", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]), 5],
      ["[0,0,1,1,1,2,2,3,3,4] -> prefix", (() => { const a = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]; const k = removeDuplicates(a); return a.slice(0, k); })(), [0, 1, 2, 3, 4]],
      ["empty", removeDuplicates([]), 0],
    ],
    "Problem 13: Contains Duplicate": [
      ["[1, 2, 3, 1]", containsDuplicate([1, 2, 3, 1]), true],
      ["[1, 2, 3, 4]", containsDuplicate([1, 2, 3, 4]), false],
      ["[1,1,1,3,3,4,3,2,4,2]", containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true],
      ["empty", containsDuplicate([]), false],
    ],
    "Problem 14: Move Zeroes": [
      ["[0, 1, 0, 3, 12]", inPlace(moveZeroes, [0, 1, 0, 3, 12]), { arr: [1, 3, 12, 0, 0], returned: undefined }],
      ["[0, 0, 1]", inPlace(moveZeroes, [0, 0, 1]), { arr: [1, 0, 0], returned: undefined }],
      ["[1, 2, 3]", inPlace(moveZeroes, [1, 2, 3]), { arr: [1, 2, 3], returned: undefined }],
      ["same array object is modified", (() => { const a = [0, 5]; moveZeroes(a); return a; })(), [5, 0]],
    ],
    "Problem 15: Merge Sorted Array": [
      ["[1,2,3,0,0,0] + [2,5,6]", inPlace(merge, [1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), { arr: [1, 2, 2, 3, 5, 6], returned: undefined }],
      ["[1] + []", inPlace(merge, [1], 1, [], 0), { arr: [1], returned: undefined }],
      ["[0] + [1]", inPlace(merge, [0], 0, [1], 1), { arr: [1], returned: undefined }],
      ["real zeros in input", inPlace(merge, [-1, 0, 0, 0], 2, [0, 3], 2), { arr: [-1, 0, 0, 3], returned: undefined }],
    ],
    "Problem 16: 3Sum": [
      ["[-1, 0, 1, 2, -1, -4]", threeSum([-1, 0, 1, 2, -1, -4]), [[-1, -1, 2], [-1, 0, 1]]],
      ["[0, 1, 1]", threeSum([0, 1, 1]), []],
      ["[0, 0, 0]", threeSum([0, 0, 0]), [[0, 0, 0]]],
      ["many duplicates", threeSum([0, 0, 0, 0, -2, 2, -2, 2]), [[-2, 0, 2], [0, 0, 0]]],
      ["input not modified", (() => { const a = [3, -3, 0]; threeSum(a); return a; })(), [3, -3, 0]],
    ],
    "Problem 17: Plus One": [
      ["[1, 2, 9]", plusOne([1, 2, 9]), [1, 3, 0]],
      ["[4, 3, 2, 1]", plusOne([4, 3, 2, 1]), [4, 3, 2, 2]],
      ["[9, 9, 9]", plusOne([9, 9, 9]), [1, 0, 0, 0]],
      ["[0]", plusOne([0]), [1]],
    ],
    "Problem 18: Reverse String": [
      ['["h","e","l","l","o"]', inPlace(reverseString, ["h", "e", "l", "l", "o"]), { arr: ["o", "l", "l", "e", "h"], returned: undefined }],
      ['["H","a","n","n","a","h"]', inPlace(reverseString, ["H", "a", "n", "n", "a", "h"]), { arr: ["h", "a", "n", "n", "a", "H"], returned: undefined }],
      ["single char", inPlace(reverseString, ["x"]), { arr: ["x"], returned: undefined }],
    ],
    "Problem 19: Length of Last Word": [
      ['"Hello World"', lengthOfLastWord("Hello World"), 5],
      ['"   fly me   to   the moon  "', lengthOfLastWord("   fly me   to   the moon  "), 4],
      ['"luffy is still joyboy"', lengthOfLastWord("luffy is still joyboy"), 6],
      ["single word", lengthOfLastWord("a"), 1],
      ["only spaces (edge)", lengthOfLastWord("   "), 0],
    ],
    "Problem 20: Longest Common Prefix": [
      ['["flower","flow","flight"]', longestCommonPrefix(["flower", "flow", "flight"]), "fl"],
      ['["dog","racecar","car"]', longestCommonPrefix(["dog", "racecar", "car"]), ""],
      // the assessment document lists "inter", but all three words share "inters"
      // (index 5 is "s" in every word; index 6 is "p" / "t" / "t")
      ['["interspecies","interstellar","interstate"]', longestCommonPrefix(["interspecies", "interstellar", "interstate"]), "inters"],
      ["single string", longestCommonPrefix(["alone"]), "alone"],
      ["contains empty string", longestCommonPrefix(["abc", ""]), ""],
      ["empty array", longestCommonPrefix([]), ""],
    ],
  };

  let passed = 0;
  let failed = 0;
  for (const [title, cases] of Object.entries(suites)) {
    console.log(`\n${title}`);
    for (const [name, actual, expected] of cases) {
      try {
        assert.deepStrictEqual(actual, expected);
        passed++;
        console.log(`  ✓ ${name}`);
      } catch {
        failed++;
        console.log(`  ✗ ${name}\n      expected: ${JSON.stringify(expected)}\n      actual:   ${JSON.stringify(actual)}`);
      }
    }
  }

  // invalid input for Problem 3 must be rejected, not silently converted
  try {
    timeConversion("25:00:00XM");
    failed++;
    console.log("\n  ✗ Problem 3: invalid time should throw");
  } catch {
    passed++;
    console.log("\nProblem 3 (extra)\n  ✓ invalid time throws a TypeError");
  }

  console.log(`\n${passed} passed, ${failed} failed`);
  process.exitCode = failed === 0 ? 0 : 1;
}
