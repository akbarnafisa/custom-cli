import {Flags} from '@oclif/core'

export type GameOptionType = {
  'game-site': boolean
}
export default {
  'game-site': Flags.boolean({
    char: 's',
    description: 'Whether or not to show a link to the game site',
    default: false,
  }),
}
