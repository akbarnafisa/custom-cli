export default async function runWithSpinner<T>(cb: () => T): Promise<T>  {
  return cb()
}
