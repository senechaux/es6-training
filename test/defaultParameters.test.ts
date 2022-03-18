describe('default parameters', () => {
  it('define name con un valor por defecto si no se llega a mandar', () => {
    const hello = (name: string) => `Hola ${name}`

    const result = hello()

    expect(result).toEqual('Hola Mundo')
  })
})
