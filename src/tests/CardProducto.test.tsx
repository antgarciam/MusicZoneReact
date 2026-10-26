//Para realizar esta prueba, se instala una libreria propia de react para realizar los test->
//>npm install -D @testing-library/react @testing-library/jest-dom jsdom

//npm run test ---> para ejecutar pruebas en cmd
//npx vitest --reporter=verbose ---> Para ejecutar pruebas en cmd con mas detalles

// @vitest-environment jsdom
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest"; // Importación correcta para Vitest

import CardProducto from "../componentes/moleculas/CardProducto";

describe("Pruebas para el componente CardProducto", () => {
    // Datos simulados (mock) para pasarle por props
    const productoPrueba = {
        id: 101,
        titulo: "Guitarra Eléctrica Fender",
        descripcion: "Guitarra de alta calidad para principiantes y avanzados.",
        precio: 350000,
        imagen: "https://ejemplo.com/guitarra.jpg"
    };

    let alerta: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        // Limpiamos el localStorage antes de cada prueba
        localStorage.clear();
        // Interceptamos la función alert de window
        alerta = vi.spyOn(window, "alert").mockImplementation(() => {});
    });

    afterEach(() => {
        // Restauramos los mocks y limpiamos el DOM
        alerta.mockRestore();
        cleanup();
    });

    test("Muestra los datos del producto correctamente en la tarjeta", () => {
        render(
            <MemoryRouter>
                <CardProducto {...productoPrueba} />
            </MemoryRouter>
        );

        // Verificamos el título
        expect(screen.getByText("Guitarra Eléctrica Fender")).toBeInTheDocument();

        // Verificamos la descripción
        expect(screen.getByText("Guitarra de alta calidad para principiantes y avanzados.")).toBeInTheDocument();

        // Verificamos el precio en la tarjeta (usamos expresión regular para evitar problemas con espacios)
        expect(screen.getByText(/350\.000/)).toBeInTheDocument();

        // Verificamos la imagen y su texto alt
        const imagen = screen.getByAltText("Guitarra Eléctrica Fender");
        expect(imagen.getAttribute("src")).toBe("https://ejemplo.com/guitarra.jpg");
    });

    test("Guarda el producto en localStorage y muestra alerta al hacer clic en Agregar al carrito", () => {
        render(
            <MemoryRouter>
                <CardProducto {...productoPrueba} />
            </MemoryRouter>
        );

        // Hacemos clic en el botón 'Agregar al carrito'
        const botonAgregar = screen.getByRole("button", { name: "Agregar al carrito" });
        fireEvent.click(botonAgregar);

        // 1. Verificamos que se mostró la alerta con el título del producto
        expect(alerta).toHaveBeenCalledWith("Guitarra Eléctrica Fender se agregó al carrito.");

        // 2. Verificamos que se guardó correctamente en localStorage
        const carritoEnStorage = JSON.parse(localStorage.getItem("carritoMusicZone") || "[]");
        expect(carritoEnStorage).toHaveLength(1);
        expect(carritoEnStorage[0]).toEqual({
            id: 101,
            titulo: "Guitarra Eléctrica Fender",
            precio: 350000,
            imagen: "https://ejemplo.com/guitarra.jpg",
            cantidad: 1
        });
    });

    test("Aumenta la cantidad si el producto ya existía en el carrito", () => {
        // Cargamos un carrito previo en localStorage con el mismo producto (cantidad 1)
        const carritoPrevio = [{
            id: 101,
            titulo: "Guitarra Eléctrica Fender",
            precio: 350000,
            imagen: "https://ejemplo.com/guitarra.jpg",
            cantidad: 1
        }];
        localStorage.setItem("carritoMusicZone", JSON.stringify(carritoPrevio));

        render(
            <MemoryRouter>
                <CardProducto {...productoPrueba} />
            </MemoryRouter>
        );

        // Hacemos clic de nuevo en 'Agregar al carrito'
        const botonAgregar = screen.getByRole("button", { name: "Agregar al carrito" });
        fireEvent.click(botonAgregar);

        // Verificamos que la cantidad aumentó a 2 en localStorage
        const carritoActualizado = JSON.parse(localStorage.getItem("carritoMusicZone") || "[]");
        expect(carritoActualizado[0].cantidad).toBe(2);
    });
});