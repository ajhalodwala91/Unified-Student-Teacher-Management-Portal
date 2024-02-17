const bcrypt = require("bcrypt")
const saltRounds = 10
const password = "example"

bcrypt
  .genSalt(saltRounds)
  .then(salt => {
    console.log('Salt: ', salt)
    return bcrypt.hash(password, salt)
  })
  .then(hash => {
    console.log('Hash: ', hash)
  })
  .catch(err => console.error(err.message))