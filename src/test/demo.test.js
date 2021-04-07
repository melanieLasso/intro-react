
describe('Pruebas en el archivo demo.test', () => {
    
    //Pruebas que no pasan
    
    // test('Esta es mi primera prueba',() => {

    // })
    
    
    // test('Debe ser true',() => {
    //     const isActive = true;
    //     if(isActive){
    //         throw new Error("Debe estar inactivo");
    //     }
    // })
    
    
    test('Deben ser iguales los strings',() => {
        
        //1.Inicialización
        const mensaje = "Hola mundo";
    
        //2.Estímulo
        const mensaje1 = `Hola mundo`
    
        //3.Observar el comportamiento
        expect(mensaje).toBe(mensaje1);
    })
})
