import React, {useState} from "react";
import { Link } from "react-router-dom";
import { StyleHeader, StyleUl } from "../Styles/headerStyle";
import Lista from "../assets/list.svg";
import X from "../assets/x.svg";

export default function Header() {
    const[aberto, setAberto] = useState(false);
    return (
        <StyleHeader>
            <img src={Lista} alt="" />
            <nav>
                <StyleUl>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/projetos">Projetos</Link></li>
                </StyleUl>
            </nav>  
            <img src={X} alt="" />
        </StyleHeader>
    )
}