"use client";

import { useEffect, useState } from "react";
import CardReceita from "@/app/receitas/components/CardReceita.jsx";
import "./receitas.css";

export default function PaginaReceitas() {
  const [receitas, setReceitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar receitas");
        return res.json();
      })
      .then((data) => {
        setReceitas(data.recipes);
      })
      .catch((err) => setErro(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="carregando">Carregando receitas...</div>;
  if (erro) return <div className="erro">Erro: {erro}</div>;

  return (
    <main className="container-pagina">
      <header className="cabecalho">
        <h1>Receitas Especiais</h1>
        <p>Explore as melhores receitas da nossa comunidade</p>
      </header>

      <div className="grid-receitas">
        {receitas.map((receita) => (
          <CardReceita key={receita.id} receita={receita} />
        ))}
      </div>
    </main>
  );
}