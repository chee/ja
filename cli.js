#!/usr/bin/env node

const get = require('.')

const argv = require('minimist')(process.argv.slice(2))

const term = argv._.join(' ')
const reading = argv.r
const jsonMode = argv.j

get({term, reading}).then(results => {
  if (jsonMode) {
    return console.log(JSON.stringify(results))
  }

  if (results.length) {
    return console.log(results.join('\n'))
  }

  process.exit(61)
})
