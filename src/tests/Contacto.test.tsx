// @vitest-environment jsdom

import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import Contacto from "../paginas/Contacto";

test("Verifica que contacto tiene diseño responsivo con sus respectivas clases", ( )=> {
    render(<Contacto/>);

    const titulo = screen.getByRole("heading", {name: /Formulario de contacto/i} );

    const contenedorResponsivo = titulo.closest(".col-12");

    expect(contenedorResponsivo).toBeInTheDocument();

    expect(contenedorResponsivo).toHaveClass("col-12")
    expect(contenedorResponsivo).toHaveClass("col-md-8")
    expect(contenedorResponsivo).toHaveClass("col-lg-6")


} );

