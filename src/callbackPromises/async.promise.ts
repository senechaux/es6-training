import { asyncFunction } from './async.function'

export const asyncPromise = (
  timeout: number = 0,
  error: boolean = false
): Promise<string> =>
  new Promise((resolve, reject) =>
    asyncFunction(timeout, error, (error, result) => {
      if (error) {
        return reject(error)
      }

      resolve(result)
    })
  )
