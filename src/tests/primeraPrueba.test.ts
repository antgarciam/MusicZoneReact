//Hay que implementar una dependencia en package.json en el apartado de scripts -> "test" : "vitest"

import { test, expect } from "vitest";

//Nuestra pagina de prueba unitaria
test("comprobar que 2 + 3 es igual a 5", () =>{

    //Compara el resultado con el valor esperado
    expect(2 + 3).toBe(5);

});