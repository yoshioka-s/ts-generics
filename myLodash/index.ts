type Each = <T>(items: T[], f: (item: T, index: number) => void) => void

const each: Each = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    callback(item, index)
  }
}

type Map = /* 定義せよ */
const map: Map = (items, callback) => {
  const result = []
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    result.push(callback(item, index))
  }
  return result
}
console.log(map(['a', 'b'], (e) => e.length)[0].toPrecision())
console.log(map([1, false], (e) => Boolean(e))[0].valueOf())

type Find = /* 定義せよ */
const find: Find = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    if (callback(item, index)) {
      return item
    }
  }
}
console.log(find(['a', 'b'], (e) => e.length === 1))
console.log(find([1, false], (e) => Boolean(e)))

export {
  each,
  map,
  find,
}
