const each = (items, callback) => {
  for (let index = 0; index < items.length; index++) {
    const item = items[index]
    callback(item, index)
  }
}

export {
  each
}
