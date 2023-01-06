function myEach(col, cb) {
  const arr = Array.isArray(col) ? [...col] : Object.values(col)
  for (let elem of arr) {
    cb(elem)
  }

  return col
}

function myMap(col, cb) {
  const arr = Array.isArray(col) ? [...col] : Object.values(col)
  let result = []

  for (let elem of arr) {
    result.push(cb(elem))
  }
  return result
}

function myReduce(col, cb, init) {
  const arr = Array.isArray(col) ? [...col] : Object.values(col)
  let acc
  if (!!init) {
    acc = init
    for (let elem of arr) {
      acc = cb(acc, elem, col)
    }
  } else {
    acc = arr[0]
    for (let i = 1; i < arr.length; i++) {
      acc = cb(acc, arr[i], col)
    }
  }

  return acc
}

function myFind(col, predicate) {
  const arr = Array.isArray(col) ? [...col] : Object.values(col)

  for (let elem of arr) {
    if (predicate(elem)) { return elem }
  }
}

function myFilter(col, predicate) {
  const arr = Array.isArray(col) ? [...col] : Object.values(col)
  let result = []
  for (let elem of arr) {
    if (predicate(elem)) { result.push(elem) }
  }

  return result
}

function mySize(col) {
  let count = 0
  for (let elem in col) {
    count++
  }
  return count
}

function myFirst(arr, n) {
  if (!!n) {
    return arr.slice(0, n)
  }

  return arr[0]
}

function myLast(arr, n) { return !!n ? arr.slice(-n) : arr[arr.length-1] }

function mySortBy(arr, cb) {  
}

function myKeys(obj) {
  const result = []
  for( let key in obj) {
    result.push(key)
  }
  return result
}

function myValues(obj) {
  const result = []
  for( let key in obj) {
    result.push(obj[key])
  }
  return result
}
const testObj = { one: 1, two: 2, three: 3 }
const testArr = [1, 2, 3]
// myEach(testArr)