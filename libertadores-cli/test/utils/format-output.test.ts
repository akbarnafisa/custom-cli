/* eslint-disable unicorn/escape-case */
import formatOutput from '../../src/utils/format-output'
import {expect} from '@oclif/test'

describe('formatOutput', () => {
  it('it formats headers the right way', () => {
    const data = {
      isHeader: true,
      date: 'jueves 18 de abril',
      round: 'Ronda 4',
    }

    expect(formatOutput(data, {'game-site': false})).to.equal('Ronda 4 - jueves 18 de abril')
  })

  it('it formats no headers row when game has been played in green color', () => {
    const data = {
      isHeader: false,
      teamOne: 'Team1',
      teamOneResult: '1',
      teamTwo: 'Team2',
      teamTwoResult: '3',
      gameSite: 'http://www.example.com',
    }

    expect(formatOutput(data, {'game-site': false})).to.equal('\u001b[31m\tTeam1 (1) - (3) Team2\u001b[39m')
    expect(formatOutput(data, {'game-site': true})).to.equal('\u001b[31m\tTeam1 (1) - (3) Team2\u001b[39m -> http://www.example.com')
  })
})
