interface Avenger {
  name: string,
  age: number
}

const spidermanObject: Avenger = {
  name: 'Spiderman',
  age: 21
}

const someNames = ['Spiderman', 'Ironman', 'Hulk']

// saca las propiedades usando la desestructuración
const spiderman = spidermanObject

// saca los nombres usando la desestructuración
const names = someNames

// usa desestructuración en la recepción de los parámetros
const someFunction = (avenger: Avenger) => {
  console.log(avenger.name, avenger.age)
}
