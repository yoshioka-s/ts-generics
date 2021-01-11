type Each = {
  <T>(items: T[], f: (item: T, index: number) => void): void
}
const each: Each = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    callback(item, index)
  }
}

export default {
  each
}
