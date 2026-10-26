// @vitest-environment jsdom
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/vitest";

import FormularioLogin from "../componentes/organismos/FormularioLogin";

describe("Pruebas para FormularioLogin", () => {
    let alerta: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        localStorage.clear();
        alerta = vi.spyOn(window, "alert").mockImplementation(() => {});
    });

    afterEach(() => {
        alerta.mockRestore();
        cleanup();
    });

    test("Muestra alerta si el correo está vacío", () => {
        render(
            <MemoryRouter>
                <FormularioLogin />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByRole("button", { name: "Iniciar Sesión" }));
        expect(alerta).toHaveBeenCalledWith("Debe ingresar su correo");
    });

    test("Inicia sesión correctamente como administrador", () => {
        const { container } = render(
            <MemoryRouter>
                <FormularioLogin />
            </MemoryRouter>
        );

        // Seleccionamos los inputs directamente por sus atributos name
        const correoInput = container.querySelector('input[name="correo"]')!;
        const passwordInput = container.querySelector('input[name="contraseña"]')!;

        fireEvent.change(correoInput, { target: { value: "admin@musiczone.cl" } });
        fireEvent.change(passwordInput, { target: { value: "admin123" } });

        fireEvent.click(screen.getByRole("button", { name: "Iniciar Sesión" }));

        expect(alerta).toHaveBeenCalledWith("Bienvenido/a, administrador");
        expect(localStorage.getItem("usuarioMusicZone")).toContain("admin");
    });
});