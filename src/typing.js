// Funciones Básicas
function sumar( a, b ){
  return a + b;
}

const contar = ( heroes ) => {
  return heroes.length;
}

const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);

// Tipo función
const noHaceNada = ( numero, texto, booleano, arreglo )=> {}

// Crear el tipo de función que acepte la función "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada

// Objetos
const batmovil = {
  carroceria: 'Negra',
  modelo: '6x6',
  antibalas: true,
  pasajeros: 4
}

const bumblebee = {
  carroceria: 'Amarillo con negro',
  modelo: '4x2',
  antibalas: true,
  pasajeros: 4,
  disparar: () => { // El metodo disparar es opcional
    console.log('Disparando')
  }
}


// Villanos debe de ser un arreglo de objetos personalizados
const villanos = [{
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
const charles = {
  poder: 'psiquico',
  estatura: 1.78
}

const apocalipsis = {
  lider: true,
  miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel']
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique

mystique = charles
mystique = apocalipsis
