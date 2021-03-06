/* eslint-disable unicorn/prefer-module */
import {expect, test} from '@oclif/test'
const mock = require('mock-require')

describe('games:all', () => {
  before(() => {
    mock('../../../src/fetcher/games.ts', '../../mocks/fetchers/games.ts')
    mock(
      '../../../src/utils/run-with-spinner.ts',
      '../../mocks/utils/run-with-spinner.ts',
    )
  })

  after(() => {
    mock.stop('../../../src/fetcher/games.ts')
    mock.stop('../../../src/utils/run-with-spinner.ts')
  })

  test
  .stdout()
  .command(['games:all'])
  .it('shows all games data', ctx => {
    const lines = ctx.stdout.split('\n')
    expect(lines.length).to.equal(6)

    expect(lines[0]).to.equal('Ronda 4 - jueves 18 de abril')
    expect(lines[1]).to.equal('\tTeam1 (1) - (3) Team2')
    expect(lines[2]).to.equal('Ronda 5 - jueves 25 de abril')
    expect(lines[3]).to.equal('\tTeam3 (2) - (4) Team4')
    expect(lines[4]).to.equal('\tTeam4 () - () Team5')
    expect(lines[5]).to.equal('')
  })

  test
  .stdout()
  .command(['games:all', '--game-site'])
  .it(
    'shows all games data including the game site when using --game-site',
    ctx => {
      const lines = ctx.stdout.split('\n')

      expect(lines.length).to.equal(6)

      expect(lines[0]).to.equal('Ronda 4 - jueves 18 de abril')
      expect(lines[1]).to.equal(
        '\tTeam1 (1) - (3) Team2 -> https://www.example1.com',
      )
      expect(lines[2]).to.equal('Ronda 5 - jueves 25 de abril')
      expect(lines[3]).to.equal(
        '\tTeam3 (2) - (4) Team4 -> https://www.example2.com',
      )
      expect(lines[4]).to.equal('\tTeam4 () - () Team5')
      expect(lines[5]).to.equal('')
    },
  )
})
