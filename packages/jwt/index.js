const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
dotenv.config()
const SECRET = process.env.SECRET
const token = jwt.sign({ user: 'hello', email: 'hello@test.com' }, SECRET, {
  expiresIn: '2s'
})
console.log(token)
const decode = jwt.verify(token, SECRET)
console.log(decode)

