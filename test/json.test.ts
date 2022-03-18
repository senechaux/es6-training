describe('json', () => {
  it('usa el api de json para convertir el objeto en un string', () => {
    const avenger = {
      name: 'Spiderman',
      age: 21
    }

    const result = 'tu solución'

    expect(result).toEqual('{\"name\":\"Spiderman\",\"age\":21}')
  })

  it('usa el api de json para covertir el string en un objeto', () => {
    const avenger = '{\"name\":\"Spiderman\",\"age\":21}'

    const result = 'tu solución'

    expect(result).toEqual({
      name: 'Spiderman',
      age: 21
    })
  })
})
