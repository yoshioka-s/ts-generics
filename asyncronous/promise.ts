import axios from 'axios'

const send = () => {
  console.log(1)
  const promise = axios.get('https://google.com')
    .then(res => {
      console.log(2)
      const promise = axios.get('https://amazon.com')
      console.log(3)
      return promise
    })
    .then(res => {
      console.log(4)
      console.log('Done!');
    })
    .catch((err) => {
      return console.error(err)
    })
  console.log(5)
  return promise
}

export default send
