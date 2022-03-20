interface Avenger {
  name: string,
  age: number
}

const spiderman: Avenger = {
  name: 'Spiderman',
  age: 21
}

describe('destructuring', () => {
  it('saca las propiedades usando la desestructuración', () => {
    const avenger = spiderman

    expect(name).toEqual('Spiderman')
    expect(itsAge).toEqual(21)
  })

  it('saca los nombres de un array usando la desestructuración', () => {
    const someNames = ['Spiderman', 'Ironman', 'Hulk']

    const names = someNames

    expect(name1).toEqual('Spiderman')
    expect(name2).toEqual('Ironman')
    expect(name3).toEqual('Hulk')
  })

  it('usa desestructuración en la recepción de los parámetros', () => {
    const someFunction = (avenger: Avenger) =>
      `Its name is ${name}, and age ${itsAge}`

    const result = someFunction(spiderman)

    expect(result).toEqual(`Its name is Spiderman, and age 21`)
  })
})
