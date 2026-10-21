# STN-7 Problem Solving — Solutions

All 20 problems from the STN-7 Problem Solving Assessment, written in JavaScript in a
single file: [`solution.js`](solution.js).

- Each problem starts with a comment block containing its **number and title**, the
  approach and its time/space complexity.
- Function names and signatures are exactly the ones given in the assessment.
- In-place problems (12, 14, 15, 18) modify the input array; the `void` ones return nothing.
- The file ends with a test suite (the examples from the assessment plus edge cases).

## Run the tests

Requires Node.js 18 or newer. No dependencies.

```bash
node solution.js
```

The script prints a ✓ / ✗ line per test case and a summary (`87 passed, 0 failed`).
It exits with code 1 if any test fails.

The functions are also exported, e.g.:

```js
const { threeSum } = require("./solution");
threeSum([-1, 0, 1, 2, -1, -4]); // [[-1, -1, 2], [-1, 0, 1]]
```

## Problems

| # | Problem | Function | Approach | Time | Space |
|---|---------|----------|----------|------|-------|
| 1 | Staircase | `staircase(n)` | (n − i) spaces + i `#` per row | O(n²) | O(n²) output |
| 2 | Grading Students | `gradingStudents(grades)` | round up to next multiple of 5 if the gap < 3 (grades ≥ 38) | O(n) | O(n) |
| 3 | Time Conversion | `timeConversion(s)` | parse hh:mm:ss + AM/PM, `hours % 12` (+12 for PM) | O(1) | O(1) |
| 4 | String Repeat | `repeatStr(n, s)` | append `s` n times | O(n·\|s\|) | O(n·\|s\|) |
| 5 | Reversed Strings | `solution(str)` | split by code point, reverse, join | O(n) | O(n) |
| 6 | Sum of Positive | `positiveSum(arr)` | add values > 0 | O(n) | O(1) |
| 7 | Grasshopper — Summation | `summation(num)` | Gauss formula n(n+1)/2 | O(1) | O(1) |
| 8 | Convert a Boolean to a String | `booleanToString(b)` | `b ? "true" : "false"` | O(1) | O(1) |
| 9 | Fizz Buzz | `fizzBuzz(n)` | check 15, then 3, then 5 | O(n) | O(n) |
| 10 | Running Sum of 1D Array | `runningSum(nums)` | running total into a new array | O(n) | O(n) |
| 11 | Richest Customer Wealth | `maximumWealth(accounts)` | max of row sums | O(m·n) | O(1) |
| 12 | Remove Duplicates from Sorted Array | `removeDuplicates(nums)` | two pointers, in-place | O(n) | O(1) |
| 13 | Contains Duplicate | `containsDuplicate(nums)` | `Set` of seen values | O(n) | O(n) |
| 14 | Move Zeroes | `moveZeroes(nums)` | compact non-zeros, fill zeros, in-place | O(n) | O(1) |
| 15 | Merge Sorted Array | `merge(nums1, m, nums2, n)` | fill from the back, in-place | O(m+n) | O(1) |
| 16 | 3Sum | `threeSum(nums)` | sort a copy + two pointers, skip duplicates | O(n²) | O(n) |
| 17 | Plus One | `plusOne(digits)` | carry from the last digit | O(n) | O(n) |
| 18 | Reverse String | `reverseString(s)` | two-pointer swap, in-place | O(n) | O(1) |
| 19 | Length of Last Word | `lengthOfLastWord(s)` | scan from the end | O(n) | O(1) |
| 20 | Longest Common Prefix | `longestCommonPrefix(strs)` | vertical character scan | O(S) | O(1) |

## Edge cases handled

- Empty inputs: `staircase(0)` → `""`, `fizzBuzz(0)` → `[]`, empty arrays for problems 6, 10–14, 20.
- Problem 3 accepts lower-case `am`/`pm` and throws a `TypeError` for malformed times.
- Problem 5 keeps emoji / surrogate pairs intact (`"ab😀"` → `"😀ba"`).
- Problem 15 works when `nums1` contains real zeros, and when `m = 0` or `n = 0`.
- Problem 16 returns each triplet once even with many repeated values, and does not reorder the caller's array.
- Problems 2, 10, 16 and 17 return new arrays and leave the input unchanged.

## Notes on the assessment examples

- **Problem 1:** for `n = 4` the first row is `"   #"` (three spaces). The document's rendering shows two.
- **Problem 20, Example 3:** the document lists `"inter"`, but `"interspecies"`, `"interstellar"`
  and `"interstate"` all share `"inters"` (index 5 is `s` in every word). The solution returns the
  correct value, `"inters"`, and the test asserts that value.
