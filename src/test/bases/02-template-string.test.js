import { getSaludo } from "../../bases/02-template-string";

describe('Pruebas en el archivo 02-template-string.js', () => {
    
    test('La función getSaludo debe retornar Hola Melanie', () =>{
        
        const nombre = "Melanie";
        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${nombre}`);
    })

    test('La función getSaludo debe retornar Hola Mela si no se le envia un argumento', () =>{
        
        const saludo = getSaludo();

        expect(saludo).toBe(`Hola Mela`);
    })
})