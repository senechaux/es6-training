describe('template string', () => {
  it('usa el template string para concatenar y pasar el test', () => {
    const name = 'John'
    const surname = 'Doe'
    const age = 34

    const result = ['elimina este array']

    expect(result).toEqual('Nombre: John, Apellido: Doe, Edad: 34')
  })
})
