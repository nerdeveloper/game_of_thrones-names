import {expect} from 'chai'
import game_of_thronesNames from '.'

describe('game_of_thrones-names', () => {
  it('should have a list of all available names', () => {
    expect(game_of_thronesNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(game_of_thronesNames.random()).to.satisfy(isIncludedIn(game_of_thronesNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
