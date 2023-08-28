const mailer = require('nodemailer')

const transporter = mailer.createTransport({
  host: 'smtp.xx.com',
  port: 465,
  secure: true,
  auth: {
    user: 'xx',
    pass: 'xxx'
  }
})

transporter.sendMail({
  from: 'xx<xx@xx.com>',
  to: 'xxx@xx.com',
  subject: '验证码',
  html: `
  <h1>验证码</h1>
  <p>您的验证码是：<br/><b>1234</b></p>
  `
})



