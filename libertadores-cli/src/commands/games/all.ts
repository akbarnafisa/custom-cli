import {Command} from '@oclif/core'
import {mockAllGames} from '../../fetcher/games'
import formatOutput from '../../utils/format-output'
import gamesOptions from '../../utils/games-options'
import runWithSpinner from '../../utils/run-with-spinner'

class AllCommand extends Command {
  static flags = gamesOptions

  async run(): Promise<void> {
    const {flags} = await this.parse(AllCommand)
    try {
      const gamesData = await runWithSpinner(mockAllGames)
      for (const data of gamesData)  this.log(formatOutput(data, flags))
    } catch (error) {
      console.error(error)

      this.error(
        'An error occurred while retrieving data, please try again or report it!',
      )
    }
  }
}

AllCommand.description = `Retrieves all the games for the "Copa Libertadores"
Color coding:
- green means it has already been played
- red means it is a future game
`

export default AllCommand
