import _ from './myLodash'
import request from './asyncronous/callback'

interface User {
  name: string
  email: string
}

const users: User[] = [
  {
    name: 'shu',
    email: 'shu@example.com'
  }
]
// users.push({ name: 'error' }) // error TS2345: Argument of type '{ name: string; }' is not assignable to parameter of type 'User'.

const array = [
  {
    name: 'shu',
    email: 'shu@example.com',
  }
]
// array.push({ name: 'shu' }) // error TS2345: Argument of type '{ name: string; }' is not assignable to parameter of type '{ name: string; email: string; }'.



const data: () => { name: string; email: string } = () => {
  return {
    name: 'shu',
    email: 'shu@example.com'
  }
}
// data: () => { name: string; email: string }
console.log(data().email);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hi')
  }, 0)
})

_.each(users, (user, i) => {
  console.log(user.email, user.name, i)
})

// request()
