import {cli} from 'cli-ux'

const runWithSpinner = async <T>(cb: () => T): Promise<T> => {
  cli.action.start('Fetching data')

  const cbResult = await cb()

  cli.action.stop()

  return cbResult
}

export default runWithSpinner
