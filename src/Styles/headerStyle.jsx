import styled from "styled-components";

export const StyleHeader = styled.header`
    background-color: #010101;
    display: flex;
    justify-content: center;
    height: 12vh;
    align-items: center;
`;

export const StyleUl = styled.ul`
    display: flex;
    list-style: none;
    border: solid 1px;
    width: 40vw;
    justify-content: space-around;
    font-size: 30px;

    @media (max-width: 800px) {
        width: 80vw;
    }

    a{
        text-decoration: none;
    }
`;