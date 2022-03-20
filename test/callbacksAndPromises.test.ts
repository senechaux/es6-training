import { asyncFunction, Callback } from '../src/callbackPromises/async.function'
import { asyncPromise } from '../src/callbackPromises/async.promise'

describe('callbacksAndPromises', () => {

  describe('callbacks', () => {
    const callback: Callback = (error?: string, result?: string) => {
      if (error) {
        return console.error('ERROR: ', error)
      }

      console.log('SUCCESS: ', result)
    }

    it('executes async with callback in parallel', (done) => {
      console.log(':D')

      asyncFunction(1000, false, callback)
      asyncFunction(600, false, callback)
      asyncFunction(800, true, callback)

      console.log(';)')

      done()
    })

    it('executes async with callback in serial', (done) => {
      console.log(':D')

      asyncFunction(1000, false, (error1, success1) => {
        if (error1) {
          return console.error('ERROR: ', error1)
        }

        console.log('SUCCESS', success1)

        asyncFunction(600, false, (error2, success2) => {
          if (error2) {
            return console.error('ERROR: ', error2)
          }

          console.log('SUCCESS', success2)

          asyncFunction(800, true, callback)
        })
      })

      console.log(';)')

      done()
    })
  })

  describe('promises', () => {
    beforeEach(() => {
      jest.useFakeTimers()
    })

    it('executes async with promise in parallel', (done) => {
      console.log(':D')

      asyncPromise(1000, false)
        .then(result => console.log('SUCCESS: ', result))
        .catch(error => console.log('ERROR: ', error))

      asyncPromise(600, false)
        .then(result => console.log('SUCCESS: ', result))
        .catch(error => console.log('ERROR: ', error))

      asyncPromise(800, true)
        .then(result => console.log('SUCCESS: ', result))
        .catch(error => console.log('ERROR: ', error))

      console.log(';)')

      done()
    })

    it('executes async with promise in serial', (done) => {
      console.log(':D')

      asyncPromise(1000, false)
        .then(result => {
          console.log('SUCCESS: ', result)
          return asyncPromise(600, false)
        })
        .then(result => {
          console.log('SUCCESS: ', result)
          return asyncPromise(800, true)
        })
        .catch(error => console.log('ERROR: ', error))

      console.log(';)')

      done()
    })
  })

  describe('async/await', () => {
    it('executes async with promise in serie', async () => {
      console.log(':D')

      try {
        const result1 = await asyncPromise(1000, false)
        console.log('SUCCESS: ', result1)

        const result2 = await asyncPromise(600, false)
        console.log('SUCCESS:', result2)

        const result3 = await asyncPromise(800, true)
        console.log('SUCCESS:', result3)
      } catch (error) {
        console.log('ERROR: ', error)
      }

      console.log(';)')
    })

    it('executes async with promise in parallel', async () => {
      console.log(':D')

      try {
        const promise1 = asyncPromise(1000, false)
        const promise2 = asyncPromise(600, false)
        const promise3 = asyncPromise(800, false)

        const result1 = await promise1
        const result2 = await promise2
        const result3 = await promise3

        console.log('SUCCESS: ', result1)
        console.log('SUCCESS:', result2)
        console.log('SUCCESS:', result3)
      } catch (error) {
        console.log('ERROR: ', error)
      }

      console.log(';)')
    })

    it('executes async with promise in parallel with promise.all', async () => {
      console.log(':D')

      try {
        const promiseAll = Promise.all([
          asyncPromise(1000, false),
          asyncPromise(600, false),
          asyncPromise(800, false)
        ])
        const result = await promiseAll

        console.log('SUCCESS: ', result)
      } catch (error) {
        console.log('ERROR: ', error)
      }

      console.log(';)')
    })
  })

  describe('promisify', () => {
    it('transform callback into a promise', (done) => {
      asyncFunction(1000, false, (error, success) => {
        if (error) {
          return console.error('ERROR: ', error)
        }

        console.log('SUCCESS: ', success)

        done()
      })
    })
  })
})
