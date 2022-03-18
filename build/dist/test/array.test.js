var avengerObjects = [
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
];
var avengerNames = ['Spiderman', 'Ironman', 'Spiderman', 'Hulk', 'Spiderman'];
describe('Array', function () {
    describe('filter', function () {
        it('utiliza .filter() con el array para filtrar los nombres', function () {
            var names = avengerNames;
            var result = ['borra este array'];
            expect(result).toEqual(['Spiderman', 'Spiderman', 'Spiderman']);
        });
        it('utiliza .filter() con el array para filtrar por edades', function () {
            var avengers = avengerObjects;
            var result = ['borra este array'];
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
            ]);
        });
    });
    describe('map', function () {
        it('utiliza el .map() para transformar los avengers(objetos) en un array de nombres', function () {
            var avengers = avengerObjects;
            var result = ['borra este array'];
            expect(result).toEqual(avengerNames);
        });
        it('utiliza el .map() para transformar los avengers(objetos) en un array de nombres', function () {
            var numbers = [1, 2, 3, 4, 5];
            var result = ['borra este array'];
            expect(result).toEqual(['1', '2', '3', '4', '5']);
        });
    });
    describe('sort', function () {
        it('ordena los números en orden ascendente utilizando el .sort()', function () {
            var numbers = [10, 1, 2, 5, 20, 60, -1, -2];
            var result = ['borra este array'];
            expect(result).toEqual([-2, -1, 1, 2, 5, 10, 20, 60]);
        });
        it('ordena los números en orden descendente utilizando el .sort()', function () {
            var numbers = [10, 1, 2, 5, 20, 60, -1, -2];
            var result = ['borra este array'];
            expect(result).toEqual([60, 20, 10, 5, 2, 1, -1, -2]);
        });
    });
    describe('find', function () {
        it('encuentra el nombre de Spiderman en el array utilizando el .find()', function () {
            var result = ['borra este array'];
            expect(result).toEqual('Spiderman');
        });
        it('encuentra el objeto de Hulk en el array utilizando el .find()', function () {
            var result = ['borra este array'];
            expect(result).toEqual({ name: 'Hulk', age: 45 });
        });
    });
    describe('some', function () {
        it('Comprueba si algún nombre está dentro del array de nombres de los vengadores usando el .some()', function () {
            var result = ['borra este array'];
            expect(result).toBeTruthy();
        });
        it('Comprueba si algún objeto está dentro del array de objetos de los vengadores usando el .some()', function () {
            var result = ['borra este array'];
            expect(result).toBeTruthy();
        });
    });
    describe('every', function () {
        it('comprueba si cada uno de los valores del array son iguales usando el .every()', function () {
            var numbers = [5, 5, 5, 5];
            var result = ['borra este array'];
            expect(result).toBeTruthy();
        });
        it('comprueba si una de las propiedades de los objetos del array son iguales usando el .every()', function () {
            var numbers = [
                {
                    name: 'Dwight Schrute',
                    age: 21
                },
                {
                    name: 'Jim Halpert',
                    age: 21
                },
                {
                    name: 'Michael Scott',
                    age: 21
                }
            ];
            var result = ['borra este array'];
            expect(result).toBeTruthy();
        });
    });
    describe('includes', function () {
        it('comprueba si el array de nombres de los vengadores incluye algún nombre usando el .includes()', function () {
            var result = ['borra este array'];
            expect(result).toBeTruthy();
        });
    });
    describe('reduce', function () {
        it('suma todos los números usando el .reduce()', function () {
            var numbers = [1, 2, 3, 4, 5];
            var result = ['borra este array'];
            expect(result).toEqual(15);
        });
    });
});
//# sourceMappingURL=array.test.js.map