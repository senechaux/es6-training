const avengerObjects = [
  {
    name: 'Spiderman',
    age: 21
  },
  {
    name: 'Ironman',
    age: 40
  },
  {
    name: 'Spiderman',
    age: 21
  },
  {
    name: 'Hulk',
    age: 45
  },
  {
    name: 'Spiderman',
    age: 21
  }
]

const avengerNames = ['Spiderman', 'Ironman', 'Spiderman', 'Hulk', 'Spiderman']

describe('Array', () => {
  describe('filter', () => {
    it('utiliza .filter() con el array para filtrar los nombres', () => {
      const names = avengerNames

      const result = names.filter((element) => element === 'Spiderman')

      expect(result).toEqual(['Spiderman', 'Spiderman', 'Spiderman'])
    })

    it('utiliza .filter() con el array para filtrar por edades', () => {
      const avengers = avengerObjects

      const result = avengers.filter ((element) => element.age === 21)

      expect(result).toEqual([
        {
          name: 'Spiderman',
          age: 21
        },
        {
          name: 'Spiderman',
          age: 21
        },
        {
          name: 'Spiderman',
          age: 21
        }
      ])
    })
  })

  describe('map', () => {
    it('utiliza el .map() para transformar los avengers(objetos) en un array de nombres', () => {
      const avengers = avengerObjects

      const result = avengers.map(({name}) => name )

      expect(result).toEqual(avengerNames)
    })

    it('utiliza el .map() para transformar los avengers(objetos) en un array de nombres', () => {
      const numbers = [1, 2, 3, 4, 5]

      const result = numbers.map((element) => `${element}`)

      expect(result).toEqual(['1', '2', '3', '4', '5'])
    })
  })

  describe('sort', () => {
    it('ordena los números en orden ascendente utilizando el .sort()', () => {
      const numbers = [10, 1, 2, 5, 20, 60, -1, -2]

      const result = numbers.sort((a, b) => a - b)    

      expect(result).toEqual([-2, -1, 1, 2, 5, 10, 20, 60])
    })

    it('ordena los números en orden descendente utilizando el .sort()', () => {
      const numbers = [10, 1, 2, 5, 20, 60, -1, -2]

      const result = numbers.sort((a, b) => b - a) 

      expect(result).toEqual([60, 20, 10, 5, 2, 1, -1, -2])
    })
  })

  describe('find', () => {
    it('encuentra el nombre de Spiderman en el array utilizando el .find()', () => {
      const result = avengerNames.find((element) => element === "Spiderman")

      expect(result).toEqual('Spiderman')
    })

    it('encuentra el objeto de Hulk en el array utilizando el .find()', () => {
      const result = avengerObjects.find(({name}) => name === "Hulk")

      expect(result).toEqual({name: 'Hulk', age: 45})
    })
  })

  describe('some', () => {
    it('Comprueba si algún nombre está dentro del array de nombres de los vengadores usando el .some()', () => {
      const result = avengerNames.some((name) => name === "Hulk")

      expect(result).toBeTruthy()
    })

    it('Comprueba si algún objeto está dentro del array de objetos de los vengadores usando el .some()', () => {
      const result = avengerObjects.some(({name}) => name === "Hulk")

      expect(result).toBeTruthy()
    })
  })

  // describe('every', () => {
  //   it('comprueba si cada uno de los valores del array son iguales usando el .every()', () => {
  //     const numbers = [5, 5, 5, 5]

  //     const result = ['borra este array']

  //     expect(result).toBeTruthy()
  //   })

  //   it('comprueba si una de las propiedades de los objetos del array son iguales usando el .every()', () => {
  //     const numbers = [
  //       {
  //         name: 'Dwight Schrute',
  //         age: 21
  //       },
  //       {
  //         name: 'Jim Halpert',
  //         age: 21
  //       },
  //       {
  //         name: 'Michael Scott',
  //         age: 21
  //       }
  //     ]

  //     const result = ['borra este array']

  //     expect(result).toBeTruthy()
  //   })
  // })

  // describe('includes', () => {
  //   it('comprueba si el array de nombres de los vengadores incluye algún nombre usando el .includes()', () => {
  //     const result = ['borra este array']

  //     expect(result).toBeTruthy()
  //   })
  // })

  // describe('reduce', () => {
  //   it('suma todos los números usando el .reduce()', () => {
  //     const numbers = [1, 2, 3, 4, 5]

  //     const result = ['borra este array']

  //     expect(result).toEqual(15)
  //   })
  // })
})
