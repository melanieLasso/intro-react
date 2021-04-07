import { getUser , getUsuarioActivo} from "../../bases/05-funciones";

describe("Pruebas en 05-funciones.js" , () => {

    test("getUser debe de retornar un objeto" , () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);
    })

    test("getUserActivo debe de retornar un objeto" , () => {
        
        const nombre = "melanie";
        const userTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(userTest);
    })
})