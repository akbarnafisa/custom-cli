/* eslint-disable unicorn/prefer-module */
const chalk = require('chalk')
import {ParsedTyped} from '../fetcher/games'
import {GameOptionType} from './games-options'

export default (data: ParsedTyped, flags: GameOptionType): string => {
  const {'game-site': showGameSite} = flags
  if (data.isHeader) {
    return `${data.round} - ${data.date}`
  }

  const gameDetails = `\t${data.teamOne} (${data.teamOneResult}) - (${data.teamTwoResult}) ${data.teamTwo}`
  let line
  line = chalk.red(gameDetails)

  if (showGameSite && data.gameSite) {
    line += ` -> ${data.gameSite}`
  }

  return line
}
