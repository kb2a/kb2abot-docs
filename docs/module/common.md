---
sidebar_position: 1
---

# Common

Common ultility functions.

## asyncWait(time)

-   **Definition**:

```js
/**
 * Pause the program with promise wrapped
 * @async
 * @param {number} time time to pause in milliseconds
 * @returns {Promise<unknown>}
 */
```

-   **Example**:

```js
console.log('We will log "amogus" after 5s')
await asyncWait(5000)
console.log('amogus')
```

## constrain(value, left, right)

-   **Definition**:

```js
/**
 * Constrain a value in [left; right]
 * @async
 * @param {number} left the smallest value
 * @param {number} right the biggest number
 * @returns {number} new value in [left; right]
 */
```

-   **Example**:

```js
constrain(5, 1, 10) // => 5
constrain(-1, 1, 10) // => -1
```

## convert_to_string_time(time)

-   **Definition**:

```js
/**
 * Convert miliseconds to time string
 * @param {number} time time in milliseconds
 * @returns {string} timestamp
 * /
```

-   **Example**:

```js
convert_to_string_time(123456) // => "2m 4s"
```

## currencyFormat(number)

-   **Definition**:

```js
/**
 * Format string or number as VND currency
 * @param {string | number} number number or string to be formatted
 * @returns {string} VND currency
 * /
```

-   **Example**:

```js
currencyFormat(1234567) // => "1,234,567"
```

## deepEqual(x, y)

-   **Definition**:

```js
/**
 * Compare two object in recursive
 * @param {Object} x the first object
 * @param {Object} y the second project
 * @returns {boolean} whether two objects are equal
 * /
```

Ex:

```js
const a = { level1: { hello: 'world' } }
const b = { level1: { hello: 'world' } }
deepEqual(a, b) // => true
```

## downloadFile(url, path)

-   **Definition**:

```js
/**
 * Download a file to a path
 * @param {string} url URL need downloading
 * @param {string} path path to save
 * @returns {Promise<void>}
 * /
```

## extend(object, deep)

Deep extend

-   **Definition**:

```js
/**
 * Deep extend an object
 * @param {Object} object parent object
 * @param {Object} deep inherit object
 * @returns {Object} inherited object
 * /
```

-   **Example**:

```js
const obj1 = {
    a: {
        b: true,
    },
}
const obj2 = {
    a: {
        c: 'kb2abot',
    },
}
extend(a, b)
// { a: { b: "kb2abot", c: true } }
```

## getFileSize(path)

-   **Definition**:

```js
/**
 * Calculate the size of the file (in MB)
 * @param {string} path path of the file
 * @returns {number} file size in MB
 * /
```

-   **Example**:

```js
getFileSize(__dirname + '/test.txt') // => 1
```

## isUrlValid(input)

-   **Definition**:

```js
/**
 * Check if a URL is valid
 * @param {string} input URL
 * @returns {boolean} whether input URL is valid
 * /
```

## numberToPassword(number)

-   **Definition**:

```js
/**
 * Convert a number to a special code (according to the English alphabet)
 * @param {number} number number you want to transfer
 * @returns {string} special code
 * /
```

-   **Example**:

```js
numbersToWords(123) // => "oth"
numbersToWords(18102004) // => "ogoztzzf"
```

## readHJSON(path)

-   **Definition**:

```js
/**
 * Read and parse a hjson file
 * @param {string} path path of the .hjson file
 * @returns {Object} text parsed into object
 * /
```

## readJSON(path)

-   **Definition**:

```js
/**
 * Read and parse a JSON file
 * @param {string} path path of the .json file
 * @returns {Object} text parsed into object
 * /
```

## removeSpecialChar(text)

-   **Definition**:

```js
/**
 * Remove strange characters in text
 * @param {string} text containing special characters
 * @returns {string} clean text
 * /
```

## round(number, amount)

-   **Definition**:

```js
/**
 * Round the digit to a certain decimal place
 * @param {number} number the digit
 * @param {number} amount decimal place
 * @returns {number} rounded digit
 * /
```

-   **Example**:

```js
round(Math.PI, 2) // => 3.14
```

## shuffle(arr)

-   **Definition**:

```js
/**
 * Shuffle the array
 * @param {Array<any>} array need shuffling
 * @returns {Array<any>} shuffled array
 * /
```

-   **Example**:

```js
const arr = [1, 2, 3, 4]
shuffle(arr) // => [2, 3, 1, 4]
console.log(arr) => [2, 3, 1, 4]
```
