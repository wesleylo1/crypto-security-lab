const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body
      
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const correct = bcrypt.compareSync(password, users[i].password)
          if (correct) {
            let userToReturn = {...users[i]}
            delete userToReturn.pwHash
            res.status(200).send(userToReturn)
          }
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
        const { username, email, firstName, lastName, password } = req.body // destructuring
        const salt = bcrypt.genSaltSync() // the amount of time to calculate bcrypt hash
        const pwHash = bcrypt.hashSync(password,salt) // taking the plain text of password, putting it in the hash algorithm 'x' amount of times
        let user = {
          username: username,
          email: email,
          firstName: firstName,
          lastName: lastName,
          password: pwHash
        }
        users.push(user)
        let userToReturn = {...user}
        delete userToReturn.pwHash
        res.status(200).send(userToReturn)
    }
}

