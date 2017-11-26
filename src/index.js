import uniqueRandomArray from 'unique-random-array'
const game_of_thronesNames = require('./game_of_thrones.json')

const mainExport = {
  all: game_of_thronesNames,
  random: uniqueRandomArray(game_of_thronesNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
