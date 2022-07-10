import styled from "styled-components";

export const bioContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    `

export const contenedorBotones = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
    `

export const bioImagen = styled.img `
    max-width: 200px;
    max-height: 300px;
    margin-bottom: 1rem;
    `

export const bioNombre = styled.h3 `
    font-size: 2em;
    margin-bottom: 1rem;
    `

export const bioDescripcion = styled.p `
    font-size: 1.3em;
    width: 70%;
    margin: 1rem auto;
    `