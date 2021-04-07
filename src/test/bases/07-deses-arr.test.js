import { retornaArreglo } from '../../bases/07-deses-arr';
describe("Pruebas en 07-deses-arr.js" , () => {
    test('Debe de retornar un string y un numero' , () => {
        
        const arregloTest = ['ABC', 123];
        const arreglo = retornaArreglo();
        const [ letras , numeros ] = retornaArreglo();
        expect(arreglo).toEqual(arregloTest);
        
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
})