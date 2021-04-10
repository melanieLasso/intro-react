import { getHeroeByIdAsync } from "../../bases/09-promesas";
import heroes from "../data/heroes";

describe("Pruebas con promesas" , () => {
    test("getHeroeByAsync Debe retornar un heroe async" , (done) => {
        jest.setTimeout(7000);
        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe => {
                expect(heroe).toEqual(heroes[0]);
                done();
            })
    });

    test("Debe de obtener un error si no enviamos el id" , (done) => {
        jest.setTimeout(7000);
        const id = 10;
        getHeroeByIdAsync(id)
            .catch( error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            })
    });
})