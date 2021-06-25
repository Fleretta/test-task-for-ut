const createCsvWriter = require('csv-writer').createObjectCsvWriter
const fs = require('fs')
const csv = require('csv-parser')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const key = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

const csvWriter = createCsvWriter({
  append: true,
  path: './data/userData.csv',
  header: [
    { id: 'username', title: 'username' },
    { id: 'email', title: 'email' },
    { id: 'password', title: 'password' }
  ]
})

module.exports.login = function (req, res) {
  let count = 0
  try {
    fs.createReadStream('./data/userData.csv')
      .pipe(csv())
      .on('data', function (data) {
        if (data.username === req.body.username) {
          if (bcrypt.compareSync(req.body.password, data.password)) {
            const token = jwt.sign(
              {
                username: data.username,
                email: data.email
              },
              key.jwt,
              { expiresIn: 3600 }
            )
            res.status(200).json({
              token: `Bearer ${token}`
            })
          } else {
            res.status(401).json({
              message: 'passwords are different'
            })
          }
          count++
        }
      })
      .on('end', function () {
        if (count === 0)
          res.status(404).json({
            message: 'username is not found'
          })
      })
  } catch (err) {
    errorHandler(res, err)
  }
}

module.exports.register = function (req, res) {
  let count = 0

  try {
    fs.createReadStream('./data/userData.csv')
      .pipe(csv())
      .on('data', function (data) {
        if (
          data.username === req.body.username ||
          data.email === req.body.email
        ) {
          res.status(409).json({
            message: 'username or email has already exist'
          })
          count++
        }
      })
      .on('end', function () {
        if (count === 0) {
          csvWriter.writeRecords([
            {
              username: req.body.username,
              email: req.body.email,
              password: bcrypt.hashSync(
                req.body.password,
                bcrypt.genSaltSync(10)
              )
            }
          ])

          res.status(201).json({
            message: 'user has registered'
          })
        }
      })
  } catch (err) {
    errorHandler(res, err)
  }
}
