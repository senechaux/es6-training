const optionalCallback = (callback?: () => void) => callback()

describe('optional channing', () => {
  it('usa el optional channing para que no se rompa el programa', () => {
    optionalCallback()
  })

  it('pasale un callback a la función para que pase el test', () => {
    expect(optionalCallback()).toEqual('Hello')
  })
})
