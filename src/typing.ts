// Funciones Básicas
function cacafuti( a: number, b: number ): number {
  return a + b;
}

const contar = ( heroes: string[] ) => {
  return heroes.length;
}

const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);


// type tipoNada = (
//   numero: string,
//   text: string,
//   booleano: boolean,
//   arreglo: []
// )
// Tipo función
const noHaceNada = ( numero: number, texto: string, booleano: boolean, arreglo: [] )=> {}

// Crear el tipo de función que acepte la función "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada
// @TODO no sabemos cómo hacerlo
// type noHaceNadaTampoco = noHaceNada 

// Objetos
const batmovil: object = {
  carroceria: 'Negra',
  modelo: '6x6',
  antibalas: true,
  pasajeros: 4
}

const bumblebee: object = {
  carroceria: 'Amarillo con negro',
  modelo: '4x2',
  antibalas: true,
  pasajeros: 4,
  disparar: () => { // El metodo disparar es opcional
    console.log('Disparando')
  }
}


// Villanos debe de ser un arreglo de objetos personalizados
const villanos: object[] = [{
  nombre: 'Lex Luthor',
  edad: 54,
  mutante: false
}, {
  nombre: 'Erik Magnus Lehnsherr',
  edad: 49,
  mutante: true
}, {
  nombre: 'James Logan',
  edad: undefined,
  mutante: true
}]

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis
type Charles = {
  poder: string,
  estatura: number,
}

const charles: Charles = {
  poder: 'psiquico',
  estatura: 1.78
}

type Apocalipsis = {
  lider: boolean,
  miembros: number[]
}

const apocalipsis: Apocalipsis = {
  lider: true,
  miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel']
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: Charles | Apocalipsis

mystique = charles
mystique = apocalipsis
