const jishon = require('jishon')

const flatten = (result, next) =>
  result.concat(next)

flatten.args = [flatten, []]

const pluck = key => item =>
  item[key]

const pluckAudio = pluck('audio')

module.exports = async ({term, reading}) => {
  const words = (await jishon(term)).words

  if (reading) {
    const word = words
      .find(word => word.furigana === reading)

    if (!word) return []

    return Object.values(pluckAudio(word))
  }

  return words.map(pluckAudio)
    .map(Object.values)
    .reduce(...flatten.args)
}
