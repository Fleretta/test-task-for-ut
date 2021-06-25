const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const key = require('../config/keys')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'secret'
}

module.exports = passport => {
  passport.use(
    new JwtStrategy(options, function (payload, done) {
      try {
        let count = 0

        fs.createReadStream('./data/userData.csv')
          .pipe(csv())
          .on('data', function (data) {
            if (data.username === req.body.username) {
              done(null, username)
              count++
            }
          })
          .on('end', function () {
            if (count === 0) done(null, false)
          })
      } catch (err) {
        console.log(err)
      }
    })
  )
}
