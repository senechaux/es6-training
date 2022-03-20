describe('spreadRest', () => {
  describe('spread operator', () => {
    it('Utiliza el spread operator para llamar a sum con el array numbers', () => {
      const sum = (a: number, b: number, c: number) => a + b + c
      const numbers: [number, number, number] = [1, 2, 3]

      expect(sum(numbers)).toEqual(6)
    })
  })

  describe('rest operator', () => {
    it(' Utiliza el rest operator para hacer que sumV2 pueda recibir números indefinidos como parámetros', () => {
      const sum = (a: number, b: number, c: number) => a + b + c

      expect(sum(1, 2, 3, 4, 5, 6, 7, 8)).toEqual(36)
    })
  })
})
