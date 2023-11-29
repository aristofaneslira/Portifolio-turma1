import React from "react";
import foto from "../assets/perfil.jpg";
import {Figure} from "../Styles/inicioStyle"

export default function Inicio() {
    return (
        <>
        <figure>
            <Figure src={foto} alt="selfie aristófanes" />
        </figure>
        <main>
            <h1> Olá!! Eu sou Aristófanes</h1>
        </main>
        </>
    )
}