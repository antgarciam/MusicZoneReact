// @vitest-environment jsdom
import { describe, test, expect, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Boton from "../componentes/atomos/Boton";

describe("Pruebas para el componente Botón", () => {

    afterEach(() => {
        // Limpiamos el DOM simulado después de cada prueba
        cleanup();
    });

    test("El botón muestra el texto Ver producto", () => {
        render(
            <MemoryRouter>
                <Boton id={3} />
            </MemoryRouter>
        );

        const boton = screen.getByText("Ver producto");
        expect(boton.textContent).toBe("Ver producto");
    });

    test("El enlace redirige a la ruta correcta con el ID pasado por props", () => {
        const idPrueba = 5;

        render(
            <MemoryRouter>
                <Boton id={idPrueba} />
            </MemoryRouter>
        );

        const enlace = screen.getByRole("link", { name: "Ver producto" });
        expect(enlace.getAttribute("href")).toBe(`/producto/${idPrueba}`);
    });

});