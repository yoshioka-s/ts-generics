import request from 'request'

const send = () => {
  console.log(1)
  request('https://google.com', (err, res) => {
    console.log(2)
    if (err) {
      return console.error(err)
    }
    request('https://amazon.com', (err, res) => {
      console.log(3)
      if (err) {
        return console.error(err)
      }
      console.log('Done!');
    })
    console.log(4)
  })
  console.log(5)
}

export default send
