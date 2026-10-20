//Para realizar esta prueba, se instala una libreria propia de react para realizar los test->
//>npm install -D @testing-library/react @testing-library/jest-dom jsdom

//npm run test ---> para ejecutar pruebas en cmd
//npx vitest --reporter=verbose ---> Para ejecutar pruebas en cmd con mas detalles

// @vitest-environment jsdom
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Boton from "../componentes/atomos/Boton";

test("El boton muestra el texto Ver Producto", () => {

    render(
        <MemoryRouter>
            <Boton id={3} />
        </MemoryRouter>
    );

    const boton = screen.getByText("Ver producto");

    expect(boton.textContent).toBe("Ver producto");

});