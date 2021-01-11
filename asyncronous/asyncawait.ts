import axios from 'axios'

const send = async () => {
  try {
    console.log(1)
    const google = await axios.get('https://google.com')
    console.log(2)
    const amazon = await axios.get('https://amazon.com')
    console.log(3)
    console.log('Done!');
  } catch (err) {
    return console.error(err)
  }
  console.log(4)
}

export default send
