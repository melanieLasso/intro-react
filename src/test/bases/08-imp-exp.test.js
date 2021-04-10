import { getHeroeById, getHeroesByOwner } from "../../bases/08-imp-exp";
import heroes from "../data/heroes";

describe("Pruebas en funciones de héroes" , () => {

    test("Debe retornar un heroe de acuerdo al id" , () => {

        const idTest = 1;
        const heroeTest = getHeroeById(idTest);
        
        const heroe = heroes.find(heroe => heroe.id === idTest);
        expect(heroeTest).toEqual(heroe);
    });

    test("Debe retornar undefined si el heroe no existe" , () => {
        
        const heroeTest = getHeroeById();
        expect(heroeTest).toEqual(undefined);
    });

    test("Debe retornar heroes de DC" , () => {

        const owner = "DC"
        const heroes1 = heroes.find( heroe => heroe.owner === owner);
        const heroesTest = getHeroesByOwner(owner);

        expect(heroesTest).toEqual(heroes1);
    });

    // test("Debe retornar heroes de Marvel" , () => {

    //     const owner = "Marvel"
    //     const heroesTest = getHeroesByOwner(owner);
    //     expect(heroesTest.length).toBe(2);
    // });
})