`
***************** INDEX - JS INTERVIEW QUESTIONS *****************

1 - REVERSE A STRING
2 - REVERSE AN ARRAY
3 - REVERSE THE ARRAY FROM GIVEN INDEXES (INDEX 2 TO INDEX 5)

4 - FIND LONGEST WORD IN A STRING
5 - CHECK IF A STRING IS A "PALINDROME"
6 - CHECK IF A STRING CAN BE "PALINDROME"
7 - CHECK IF TWO STRINGS ARE "ANAGRAMS"

8 - FIND DUPLICATE ELEMENTS IN AN ARRAY O(n)
9 - FIND DUPLICATE ELEMENTS IN AN ARRAY O(n²)
10 - REMOVE DUPLICATE ELEMENTS FROM AN ARRAY

11 - SORT AN ARRAY WITHOUT USING .sort() METHOD ------> (BUBBLE SORT)
12 - FIND LARGEST NUMBER IN AN ARRAY --------------> USING .sort() METHOD
13 - FIND LARGEST NUMBER IN AN ARRAY --------------> USING for LOOP
14 - FIND SECOND LARGEST NUMBER IN AN ARRAY

15 - FIND OCCURANCE OF ELEMENTS IN AN ARRAY -------> return an object with key as element and value as number of occurances -> { '1': 8, '2': 2, '3': 2, '4': 3, '5': 2, '6': 1 }
16 - FIND OCCURANCE OF ELEMENTS IN A STRING -------> return a string with key as element and value as number of occurances -> a3 b3 c3 d4
17 - COUNT VOWELS IN A STRING

18 - FIND COMMON ELEMENTS IN TWO ARRAYS
19 - FLAT AN ARRAY FUNCTION

20 - DEBOUNCE AND THROTTLE IN JAVASCRIPT
21 - MAP, FILTER AND REDUCE ****reduce pending**** POLYFILLS IN JAVASCRIPT
22 - DEEP CLONE (ARRAY || OBJECT)
23 - MEMOIZATION FUNCTION

24 - FLAT AN OBJECT WITHOUT ARRAY
25 - FLAT ON OBJECT HAVING ARRAY
26 - FIBONACCI SERIES
27 - CHECK IF AN ARRAY IS SORTED OR NOT
28 - BINARY SEARCH IN AN ARRAY
29 - ARRANGE ALL ANAGRAMS TOGETHER IN AN ARRAY
30 - FIND THE FIRST NON-REPEATING CHARACTER IN A STRING  ---->>>>>> first: "abcabcbb" -> output: "3" 
                                                         --->>>>>> second: "abcabcbb" -> output: "abc"

31 - INFINITE SCROLL USING REACT.JS / JAVASCRIPT
32 - INFINITE SCROLL USING INTERSECTION OBSERVER API

** - IMPLEMENT A SIMPLE DEEP EQUAL FUNCTION
** - FIND FIRST NON-REPEATING CHARACTER IN A STRING
** - FIND FIRST REPEATING CHARACTER IN A STRING
** - CHECK IF TWO STRINGS ARE ROTATIONS OF EACH OTHER
** - IMPLEMENT A SIMPLE EVENT EMITTER
** - IMPLEMENT A PROMISE POLYFILL

******************************************************************
`

// 1 - REVERSE A STRING
const string_1 = "1234567";
const reverseString = (string) => {
    let newVal = "";

    for (let i = string.length - 1; i >= 0; i--) {
        newVal = newVal + string[i];
    }

    return newVal;
};
// console.log('1 -> ', reverseString(string_1));

// 2 - REVERSE AN ARRAY
const arr_1 = [1, 2, 3, 4, 5, 6, 7];
const reverseArray = (arr) => {
    let temp = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        temp.push(arr[i]);
    }

    return temp;
}
// console.log('2 -> ', reverseArray(arr_1));

// 3 - REVERSE THE ARRAY FROM GIVEN INDEXES (INDEX 2 TO INDEX 5)
const arr_2 = [1, 2, 3, 4, 5, 6, 7];
const reverseArrayFromIndex = (arr, startIndex, endIndex) => {
    let left = startIndex;
    let right = endIndex;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}
// console.log('3 -> ', reverseArrayFromIndex([...arr_2], 2, 5));

// 4 - FIND LONGEST WORD IN A STRING
const string_2 = '1 22 9999999999999 333 4444 55555555 33 1';
const findLongest = (string) => {
    let longest = string[0];

    const arr = string.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (longest.length < arr[i].length) {
            longest = arr[i];
        }
    }

    return longest;
}
// console.log('4 -> ', findLongest(string_2));

// 5 - CHECK IF A STRING IS A PALINDROME
const palindrome_string = "radar";
const checkPalindrome = (string) => {
    let startIndex = 0;
    let endIndex = string.length - 1;

    while (endIndex > startIndex) {
        if (string[startIndex] !== string[endIndex]) {
            return false;
        }

        startIndex++;
        endIndex--;
    }

    return true;
};
// console.log('5 -> ', checkPalindrome(palindrome_string));

// 6 - CHECK IF A STRING CAN BE A PALINDROME
const random_string = "radar";
const canBePalindrome = (string) => {
    const count = {};

    for (let char of string) {
        count[char] = (count[char] || 0) + 1;
    }

    let oddCount = 0;
    for (let key in count) {
        if (count[key] % 2 !== 0) oddCount++;
    }

    return oddCount <= 1;
};
// console.log('6 -> ', canBePalindrome (random_string));

// 7 - CHECK IF TWO STRINGS ARE ANAGRAMS
const string_3 = "listen";
const string_4 = "silent";
const checkAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const a = str1.split('').sort().join('');
    const b = str2.split('').sort().join('');

    if (a === b) return true;
    else return false;
};
// console.log('7 -> ', checkAnagram(string_3, string_4));

// 8 - FIND DUPLICATE ELEMENTS IN AN ARRAY O(n)
const duplicateValues_set = (arr) => {
    const seen = new Set();
    const duplicate = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            duplicate.add(arr[i]);
        } else {
            seen.add(arr[i]);
        }
    }

    return [...duplicate];
}
// console.log('8 -> ', duplicateValues_set(array));

// 9 - FIND DUPLICATE ELEMENTS IN AN ARRAY O(n²)
const arr_3 = [5, 1, 3, 7, 5, 9, 1, 2, 8, 3, 4, 6, 7, 10, 2, 11, 12, 6, 13, 14, 15, 10, 16, 17, 18, 19, 20, 5, 21, 22, 3];
const duplicateValues_loop = (arr) => {
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !temp.includes(arr[i])) {
                temp.push(arr[i]);
            }
        }
    }

    return temp;
}
// console.log('9 -> ', duplicateValues_loop(arr_3));

// 10 - REMOVE DUPLICATE ELEMENTS FROM AN ARRAY
const arr_4 = [1, 2, 3, 4, 4, 5, 4, 3, 2, 5, 6];
function removeDuplicates(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (newArr.indexOf(element) === -1) {
            newArr.push(element);
        }
    }

    return newArr;

    // return [...new Set(arr)];
}
// console.log('10 -> ', removeDuplicates(arr_4));

// 11 - SORT AN ARRAY WITHOUT USING .sort() METHOD -> (BUBBLE SORT)
const arr_5 = [2, 4, 3, 5, 1];
const sortArr = (arr) => {
    const newArr = [...arr];

    for (let i = 0; i < newArr.length; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[j] < newArr[i]) {
                let temp = newArr[i]
                newArr[i] = newArr[j]
                newArr[j] = temp;
            }
        }
    }

    return newArr;
}
// console.log('11 -> ', sortArr(arr_5));

// 12 - FIND LARGEST NUMBER IN AN ARRAY
// USING JS .sort() METHOD
const arr_6 = [2, 4, 3, 5, 1, 9, 12, 99, 0, 2, 55, 2, 0];
const findLargest = (arr) => {
    const a = [...arr].sort((x, y) => x - y);

    return a[a.length - 1];
}
// console.log('12 -> ', findLargest(arr_6));

// 13 - FIND LARGEST NUMBER IN AN ARRAY
// USING for LOOP LOGIC
const findLargestCustom = (arr) => {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
// console.log('13 -> ', findLargestCustom(arr_6));

// 14 - FIND SECOND LARGEST NUMBER IN AN ARRAY
const arr_7 = [2, 4, 3, 5, 1, 9, 12, 99, 0, 88, 2, 55, 2, 0];
const findSecondLargest = (arr) => {
    // if the array contain duplicates and not sorted then first remove duplicate items and sort the array.
    const temp = [...new Set(arr)].sort((x, y) => x - y);
    return temp[temp.length - 2];
};

// console.log('14 -> ', findSecondLargest(arr_7));

// 15 - FIND OCCURANCE OF ELEMENTS IN AN ARRAY -> {}
// return an object with key as element and value as number of occurances of that element in the array.
const arr_8 = [1, 2, 3, 4, 4, 5, 4, 3, 2, 5, 6, 1, 1, 1, 1, 1, 1, 1];
const findOccurance_ReturnObject = (arr) => {
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1
        } else {
            obj[arr[i]] = 1;
        }
    }

    return obj;
}
// console.log('15 -> ', findOccurance_ReturnObject(arr_8));

// 16 - FIND OCCURANCE OF ELEMENTS IN A STRING -> ""
// return a string with key as element and value as number of occurances of that element in the array.
const string_5 = 'aabbcccddddba';
const findOccurance_ReturnString = (string) => {
    const arr = string.split('');
    const obj = {};
    let str = '';

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]] = obj[arr[i]] + 1
        } else {
            obj[arr[i]] = 1
        }
    }

    for (let key in obj) {
        str += `${key}${obj[key]} `;
    }

    return str;
}
// console.log('16 -> ', findOccurance_ReturnString(string_5));

// 17 - COUNT VOWELS IN A STRING
const string_6 = 'hello world';
const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    str.split('').forEach(item => {
        if (vowels.includes(item)) {
            count++
        }
    });

    return count;
}
// console.log('17 -> ', countVowels(string_6));

// 18 - FIND COMMON ELEMENTS IN TWO ARRAYS
const arr_9 = [1, 2, 3, 4, 5, 33, 29, 99, 23, 45, 67, 89, 90];
const arr_10 = [4, 5, 6, 7, 8, 9, 10, 11, 12, 33, 14, 90, 16, 99, 67];
const findCommonElements = (arr1, arr2) => {
    const temp = [];

    arr1.forEach(item => {
        if (arr2.includes(item)) {
            temp.push(item);
        }
    });

    return temp;
}
// console.log('18 -> ', findCommonElements(arr_9, arr_10));

// 19 - FLAT AN ARRAY FUNCTION
const arr_11 = [1, 2, [3, 4], [5, 6, [7, 8]], 9];
const flatArray = (arr) => {
    let temp = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            // temp.push(...flatArray(item));       // this is also correct
            temp = [...temp, ...flatArray(item)];   // both are correct
        } else {
            temp = [...temp, item];
        }
    }

    return temp;
}
// console.log('19 -> ', flatArray(arr_11));

// 20 - DEBOUNCE AND THROTTLE IN JAVASCRIPT
// DEBOUNCE
const debounce = (func) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            func(...args);
        }, 1000);
    }
}
// THROTTLE
const throttle = (func) => {
    let timer;

    return (...args) => {
        if (!timer) {
            func(...args);

            timer = setTimeout(() => {
                timer = null;
            }, 1000);
        }
    }
}

// 21 - MAP, FILTER AND REDUCE POLYFILLS IN JAVASCRIPT
// MAP
Array.prototype.myMap = function (cb) {
    const temp = [];

    for (let i = 0; i < this.length; i++) {
        temp.push(cb(this[i], i, this));
    }
    return temp;
}
// FILTER
Array.prototype.myFilter = function (cb) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
}

// 22 - DEEP CLONE (ARRAY || OBJECT)
const deepClone = (value) => {
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(item => deepClone(item));
    }

    const clone = {};

    for (let key in value) {
        if (Object.hasOwn(value, key)) {
            clone[key] = deepClone(value[key]);
        }
    }

    return clone;
};
// console.log('22 -> ', deepClone({ a: 1, b: { c: 2 } }));

// 23 - MEMOIZATION FUNCTION
const memoize = (fn) => {
    const cache = {};

    return function (...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;

        return result;
    };
};

// 24 - FLAT AN OBJECT WITHOUT ARRAY
const user = {
    name: "John",
    address: {
        city: "New York",
        zip: 10001,
        loca: {
            tion: "tion",
        },
    },
};

const flatObject = (object, key, result = {}) => {
    for (const k in object) {
        const newKey = key ? `${key}.${k}` : k;

        if (typeof object[k] === "object" && !Array.isArray(object[k]) && object[key] !== null) {
            flatObject(object[k], k, result);
        } else {
            result[newKey] = object[k];
        }
    }

    return result;
};

// console.log('24 -> ',flatObject(user));

// 25 - FLAT ON OBJECT HAVING ARRAY
const flattenObject = (obj, parentKey = "", result = {}) => {
    for (let key in obj) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        const value = obj[key];

        if (typeof value === "object" && value !== null) {
            flattenObject(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    }

    return result;
};

const data = {
    user: {
        name: "John",
        skills: ["JS", "React"],
    },
};

// console.log('25 -> ', flattenObject(data));

// 26 - FIBONACCI SERIES
const fibonacciRecursion = (n) => {
    if (n <= 1) return n;

    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
const fibonacciLoop = (n) => {
    if (n <= 1) return n;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return curr;
}
// console.log('26 -> ', fibonacciRecursion(10));
// console.log('26 -> ', fibonacciLoop(10));

// 27 - CHECK IF AN ARRAY IS SORTED OR NOT
const checkSorted = (arr) => {
    let val = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            val = false;
            break;
        } else {
            val = true;
        }
    }

    return val;
};

const a = [1, 2, 3, 4, 5, 6, 7];

// console.log('27 -> ', checkSorted(a));

// 28 - BINARY SEARCH IN AN ARRAY
const array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const search = (arr, val) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === val) {
            return mid;
        } else if (val < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
};

// console.log('28 -> ', search(array, 90));

// 29 - ARRANGE ALL ANAGRAMS TOGETHER IN AN ARRAY
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
// [(["bat"], ["nat", "tan"], ["ate", "eat", "tea"])];  --->>> OUTPUT

const get = (arr) => {
    const obj = {};

    for (const val of arr) {
        const key = val.split("").sort().join("");

        if (!obj[key]) {
            obj[key] = [];
        }

        obj[key].push(val);
    }

    return Object.values(obj);
};

// console.log('29 -> ', get(strs));

// 30 - FIND THE LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS
// This will return the length of longest substring without repeating characters.
// For example, for the input "abcabcbb", the longest substring without repeating characters is "abc", which has a length of 3. So the output will be 3.
const longestSubstringWithoutRepeating = (s) => {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }

        charIndexMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
};
// This will return the longest substring without repeating characters. 
// The output will be "abc".
const longestSubstring = (str) => {
    let set = new Set();
    let left = 0;
    let maxLength = 0;
    let longest = "";

    for (let right = 0; right < str.length; right++) {

        while (set.has(str[right])) {
            set.delete(str[left]);
            left++;
        }

        set.add(str[right]);

        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            longest = str.slice(left, right + 1);
        }
    }

    return longest;
};
// console.log('30 -> ', longestSubstringWithoutRepeating("abcabcbb"));
// console.log('30 -> ', longestSubstring("abcabcbb"));

// 31 - INFINITE SCROLL IN REACT.JS / JAVASCRIPT
import { useState } from "react";

const THRESHOLD = 20;

const CustomInfiniteLoader = () => {
    const [data, setData] = useState([...new Array(40)]);
    const [isLoading, setIsLoading] = useState(false);

    const loadMore = () => {
        if (isLoading) return;
        setIsLoading(true);

        setTimeout(() => {
            setData((prev) => [...prev, ...new Array(10)]);
            setIsLoading(false);
        }, 1000);
    };

    const handleScroll = (e) => {
        const scrollHeight = e.target.scrollHeight;
        const clientHeight = e.target.clientHeight;
        const scrollTop = e.target.scrollTop;
        const remain = scrollHeight - clientHeight - scrollTop;

        if (remain < THRESHOLD) {
            loadMore();
        }
    };

    return (
        <div onScroll={handleScroll}>
            {data.map((_item, index) => (
                <p key={index}>
                    {index + 1}
                </p>
            ))}
            {isLoading ? <p>Loading...</p> : null}
        </div>
    );
};

// 32 - INFINITE SCROLL USING INTERSECTION OBSERVER API
// Intersection Observer API is a **browser API** that allows you to 
// **asynchronously** observe changes in the intersection of a target element with an ancestor 
// element or with a top-level document's viewport. It can be used to implement infinite scrolling by 
// observing when the last item in a list becomes visible in the viewport, and then loading more items when that happens.
import { useEffect, useRef } from "react";

const IntersectionObserverInfiniteLoader = () => {
    const [data, setData] = useState([...new Array(40)]);
    const [loading, setLoading] = useState(false);
    const refList = useRef([]);

    const loadMore = () => {
        if (loading) return;

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setData((prev) => [...prev, ...new Array(10)]);
        }, 2000);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                observer.unobserve(entries[0].target);
                loadMore();
            }
        });

        const lastElement = refList.current[refList.current.length - 1];
        observer.observe(lastElement);

        return () => {
            observer.disconnect();
        };
    }, [data.length]);

    return (
        <div className="scroll-container">
            {data.map((item, index) => (
                <p
                    ref={(elem) => (refList.current[index] = elem)}
                    key={index}
                    className="data"
                >
                    {index + 1}
                </p>
            ))}

            {loading ? <p>Loading...</p> : null}
        </div>
    );
};
