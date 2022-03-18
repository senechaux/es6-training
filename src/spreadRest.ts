export const sum = (a: number, b: number, c: number) => a + b + c

const numbers: [1, 2, 3] = [1, 2, 3]

// Utiliza el spread operator para llamar a sum con el array numbers
sum(numbers)

// Utiliza el rest operator para hacer que sumV2 pueda recibir números indefinidos como parámetros
export const sumV2 = (a: number, b: number, c: number) => a + b + c

sumV2(1, 2, 3, 4, 5, 6, 7, 8)

