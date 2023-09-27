const express = require('express')
const svgCaptcha = require('svg-captcha')
const session = require('express-session')

const app = express()

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.get('/hello', (req, res) => {
  const captcha = svgCaptcha.create()
  req.session.captcha = captcha.text
  res.type('svg')
  res.status(200).send(captcha.data)
})
app.listen(3030, () => {
  console.log('listening on ' + 3030)
})
