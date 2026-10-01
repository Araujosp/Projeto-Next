"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import "./detalhes.css";

export default function DetalhesReceita({ params }) {
  // Desembrulha os parâmetros dinâmicos (slug/id)
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [receita, setReceita] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!id) return;

    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Receita não encontrada");
        return res.json();
      })
      .then((data) => setReceita(data))
      .catch((err) => setErro(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="carregando">Carregando receita...</div>;
  if (erro) return <div className="erro">Erro: {erro}</div>;
  if (!receita) return null;

  return (
    <main className="container-detalhes">
      <Link href="/receitas" className="btn-voltar">
        ← Voltar para Receitas
      </Link>

      <article className="cartao-detalhe">
        {/* Propriedade 1: Nome/Título */}
        <h1 className="titulo">{receita.name}</h1>

        {/* Propriedade 2: Imagem */}
        <img src={receita.image} alt={receita.name} className="imagem-principal" />

        {/* Painel com Métricas (Propriedades 3 a 8) */}
        <div className="painel-info">
          <div className="info-item">
            <strong>Culinária:</strong> {receita.cuisine} {/* 3 */}
          </div>
          <div className="info-item">
            <strong>Dificuldade:</strong> {receita.difficulty} {/* 4 */}
          </div>
          <div className="info-item">
            <strong>Preparo:</strong> {receita.prepTimeMinutes} min {/* 5 */}
          </div>
          <div className="info-item">
            <strong>Cozimento:</strong> {receita.cookTimeMinutes} min {/* 6 */}
          </div>
          <div className="info-item">
            <strong>Rendimento:</strong> {receita.servings} porções {/* 7 */}
          </div>
          <div className="info-item">
            <strong>Calorias:</strong> {receita.caloriesPerServing} kcal/porção {/* 8 */}
          </div>
          <div className="info-item">
            <strong>Avaliação:</strong> ⭐ {receita.rating} ({receita.reviewCount} avaliações) {/* 9 */}
          </div>
        </div>

        {/* Propriedade 10: Ingredientes */}
        <section className="secao-receita">
          <h2>Ingredientes</h2>
          <ul className="lista-ingredientes">
            {receita.ingredients.map((ingrediente, index) => (
              <li key={index}>{ingrediente}</li>
            ))}
          </ul>
        </section>

        {/* Propriedade 11: Modo de Preparo */}
        <section className="secao-receita">
          <h2>Modo de Preparo</h2>
          <ol className="lista-instrucoes">
            {receita.instructions.map((passo, index) => (
              <li key={index}>{passo}</li>
            ))}
          </ol>
        </section>

        {/* Propriedades Extras (Tags e Refeição) */}
        <footer className="rodape-receita">
          <p><strong>Tipo de Refeição:</strong> {receita.mealType?.join(", ")}</p>
          <div className="tags">
            {receita.tags?.map((tag, index) => (
              <span key={index} className="tag">#{tag}</span>
            ))}
          </div>
        </footer>
      </article>
    </main>
  );
}