// @vitest-environment jsdom

import { test, expect, vi} from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import FormularioContacto from "../componentes/organismos/FormularioContacto";

test("Muestra una alerta cuando el nombre esta vacío", () => {
    //Simulamos la funcion alert del navegador
    const alerta = vi.spyOn(window, "alert").mockImplementation(() => {});

    //Mostramos el formulario
    render(<FormularioContacto/>);

    //Simulamos que el usuario presiona enviar
    fireEvent.click(
        screen.getByRole("button", { name: "Enviar Mensaje" })
    );

    //Comprobamos el mensaje de validacion
    expect(alerta).toHaveBeenCalledWith("Debe ingresar su nombre");

    //Restauramos la funcion alert
    alerta.mockRestore();
})