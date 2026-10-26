// @vitest-environment jsdom
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

import Navbar from "../componentes/organismos/Navbar";

describe("Pruebas para el componente Navbar", () => {
    let alerta: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        localStorage.clear();
        alerta = vi.spyOn(window, "alert").mockImplementation(() => {});
    });

    afterEach(() => {
        alerta.mockRestore();
        cleanup();
    });

    test("Muestra los enlaces públicos para un usuario no autenticado", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByRole("link", { name: "Iniciar sesión" })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: "Registrarse" })).toBeInTheDocument();
    });

    test("Muestra la opción de Administrar productos cuando el usuario es admin", () => {
        localStorage.setItem(
            "usuarioMusicZone",
            JSON.stringify({ correo: "admin@musiczone.cl", rol: "admin" })
        );

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        expect(screen.getByRole("link", { name: "Administrar productos" })).toBeInTheDocument();
        expect(screen.queryByRole("link", { name: "Iniciar sesión" })).not.toBeInTheDocument();
    });

    test("Cierra la sesión correctamente y borra el usuario de localStorage", () => {
        localStorage.setItem(
            "usuarioMusicZone",
            JSON.stringify({ correo: "cliente@musiczone.cl", rol: "cliente" })
        );

        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        );

        const botonCerrar = screen.getByRole("button", { name: "Cerrar sesión" });
        fireEvent.click(botonCerrar);

        expect(alerta).toHaveBeenCalledWith("Sesión cerrada correctamente");
        expect(localStorage.getItem("usuarioMusicZone")).toBeNull();
    });
});