import { executor } from '../src/callbackPromises/classes.executor'

describe('arrows', () => {
  describe('execution in its context', () => {
    it('regular function', () => {
      class Dog {
        constructor(private name: string) {
        }

        tellName() {
          console.log(this.name)
        }
      }

      const dog = new Dog('Pluto')

      dog.tellName()
    })

    it('arrow function', () => {
      class Dog {
        constructor(private name: string) {
        }

        tellName = () => {
          console.log(this.name)
        }
      }

      const dog = new Dog('Pluto')

      dog.tellName()
    })
  })

  describe('execution in other context', () => {
    it('regular function', () => {
      class Dog {
        constructor(private name: string) {
        }

        tellName() {
          console.log(this.name)
        }
      }

      const dog = new Dog('Pluto')

      executor.exec(dog.tellName)
    })

    it('binding regular function', () => {
      class Dog {
        constructor(private name: string) {
        }

        tellName() {
          console.log(this.name)
        }
      }

      const dog = new Dog('Pluto')

      const tellNameBindedToDog = dog.tellName.bind(dog)
      executor.exec(tellNameBindedToDog)
    })

    it('self-binding regular function', () => {
      class Dog {
        constructor(private name: string) {
          this.tellName = this.tellName.bind(this)
        }

        tellName() {
          console.log(this.name)
        }
      }

      const dog = new Dog('Pluto')

      executor.exec(dog.tellName)
    })

    it('arrow function', () => {
      class Dog {
        constructor(private name: string) {
        }

        tellName = () => {
          console.log(this.name)
        }
      }

      const dog = new Dog('Pluto')

      executor.exec(dog.tellName)
    })
  })

  describe('execution in other context with available property', () => {
    it('regular function', () => {
      class Dog {
        constructor(private name: string) {
        }

        tellName = () => {
          console.log(this.name)
        }
      }

      const dog = new Dog('Pluto')

      const sureMen = {name: 'Bethoven', muahaha: dog.tellName}
      sureMen.muahaha()
    })

    it('arrow function', () => {
      class Dog {
        constructor(private name: string) {
        }

        tellName() {
          console.log(this.name)
        }
      }

      const dog = new Dog('Pluto')

      const sureMen = {name: 'Bethoven', muahaha: dog.tellName}
      sureMen.muahaha()
    })
  })
})
