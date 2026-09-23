"use client";

import { useEffect, useState } from "react";
import "./receitas.css";

export default function Receitas() {
const [listaReceitas, setListaReceitas] = useState([]);
const [msgErro, setMsgErro] = useState("");


useEffect(() => {
    fetch("https://dummyjson.com/recipes")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setListaReceitas(data.recipes);
            setMsgErro("");
        })
        .catch(erro => {
            setMsgErro(erro.message);
        });
}, []);

return (
    <main className="pagina">
        <header className="cabecalho">
            <h1>API DummyJSON Receitas</h1>
            <p>Receitas consumidas através da API DummyJSON</p>
        </header>

        {msgErro !== "" && (
            <p className="erro">Erro: {msgErro}</p>
        )}

        {listaReceitas.length > 0 ? (
            <div className="receitas-container">
                {listaReceitas.map((receita) => {
                    return (
                        <div className="card-receita" key={receita.id}>
                            <img
                                className="foto-receita"
                                src={receita.image}
                                alt={`Foto de ${receita.name}`}
                            />

                            <h2>{receita.name}</h2>
                        </div>
                    );
                })}
            </div>
        ) : (
            <div className="sem-receitas">
                Sem receitas por enquanto!!
                <br />
                Tente novamente mais tarde...
            </div>
        )}
    </main>
);

}
