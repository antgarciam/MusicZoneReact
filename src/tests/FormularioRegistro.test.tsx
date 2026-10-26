// @vitest-environment jsdom
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import FormularioRegistro from "../componentes/organismos/FormularioRegistro";

describe("Pruebas para FormularioRegistro", () => {
    let alerta: ReturnType<typeof vi.spyOn>;

    beforeEach(() => {
        alerta = vi.spyOn(window, "alert").mockImplementation(() => {});
    });

    afterEach(() => {
        alerta.mockRestore();
        cleanup();
    });

    test("Muestra alerta si el nombre está vacío", () => {
        render(<FormularioRegistro />);

        fireEvent.click(screen.getByRole("button", { name: "Registrarse" }));
        expect(alerta).toHaveBeenCalledWith("Debe ingresar su nombre");
    });

    test("Muestra alerta si las contraseñas no coinciden", () => {
        const { container } = render(<FormularioRegistro />);

        const inputNombre = container.querySelector('input[name="nombre"]')!;
        const inputApellido = container.querySelector('input[name="apellido"]')!;
        const inputCorreo = container.querySelector('input[name="correo"]')!;
        const inputPsswd = container.querySelector('input[name="contraseña"]')!;
        const inputConfirmar = container.querySelector('input[name="confirmarContraseña"]')!;

        fireEvent.change(inputNombre, { target: { value: "Juan" } });
        fireEvent.change(inputApellido, { target: { value: "Pérez" } });
        fireEvent.change(inputCorreo, { target: { value: "juan@gmail.com" } });
        fireEvent.change(inputPsswd, { target: { value: "12345678" } });
        fireEvent.change(inputConfirmar, { target: { value: "87654321" } });

        fireEvent.click(screen.getByRole("button", { name: "Registrarse" }));

        expect(alerta).toHaveBeenCalledWith("Las contraseñas no coinciden");
    });

    test("Registra exitosamente cuando todos los datos son válidos", () => {
        const { container } = render(<FormularioRegistro />);

        const inputNombre = container.querySelector('input[name="nombre"]')!;
        const inputApellido = container.querySelector('input[name="apellido"]')!;
        const inputCorreo = container.querySelector('input[name="correo"]')!;
        const inputPsswd = container.querySelector('input[name="contraseña"]')!;
        const inputConfirmar = container.querySelector('input[name="confirmarContraseña"]')!;

        fireEvent.change(inputNombre, { target: { value: "Juan" } });
        fireEvent.change(inputApellido, { target: { value: "Pérez" } });
        fireEvent.change(inputCorreo, { target: { value: "juan@gmail.com" } });
        fireEvent.change(inputPsswd, { target: { value: "12345678" } });
        fireEvent.change(inputConfirmar, { target: { value: "12345678" } });

        fireEvent.click(screen.getByRole("button", { name: "Registrarse" }));

        expect(alerta).toHaveBeenCalledWith("Se ha registrado correctamente");
    });
});