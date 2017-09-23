#!/usr/bin/env node

const get = require('.')

const argv = require('minimist')(process.argv.slice(2))

get({
  term: argv._.join(' '),
  reading: argv.r
}).then(results => {
  if (!results.length) {
    process.exit(61)
  }

  if (argv.j) {
    return console.log(JSON.stringify(results))
  }

  console.log(results.join('\n'))
})
