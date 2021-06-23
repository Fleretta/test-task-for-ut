const http = require('http')
const url = require('url')
const { parse } = require('querystring')
// const fs = require("fs");
// const csv = require("csv-parser");
const createCsvWriter = require('csv-writer').createObjectCsvWriter

const csvWriter = createCsvWriter({
  append: true,
  path: './userData/userData.csv',
  header: [
    { id: 'username', title: 'username' },
    { id: 'email', title: 'email' },
    { id: 'password', title: 'password' }
  ]
})

http
  .createServer((request, response) => {
    if (request.method == 'GET') {
      const urlRequest = url.parse(request.url, true)

      console.log(urlRequest.query.test)
      response.end(urlRequest.query.test)
    }

    if (request.method == 'POST') {
      let body = ''
      request.on('data', chunk => {
        body += chunk.toString()
      })
      request.on('end', () => {
        console.log(parse(body))
        const { username, email, password } = parse(body)

        csvWriter
          .writeRecords([
            {
              username: username,
              email: email,
              password: password
            }
          ])
          .then(() => {
            console.log('Done')
          })

        response.end('ok')
      })
    }
  })
  .listen(3000)
