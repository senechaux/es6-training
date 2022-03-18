describe('null coallescence', () => {
  it('usa el null coallescence para devolver un valor por defecto si el parámetro es null', () => {
    const hello = (greeting?: string) => greeting

    const result = hello()

    expect(result).toEqual('Hola')
  })
})
