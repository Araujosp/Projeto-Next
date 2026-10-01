import Link from "next/link";

export default function CardReceita({ receita }) {
  return (
    <div className="card-receita">
      <img
        src={receita.image}
        alt={`Foto de ${receita.name}`}
        className="foto-receita"
      />
      <h2>{receita.name}</h2>
      <Link href={`/receitas/${receita.id}`} className="btn-saiba-mais">
        Saiba Mais
      </Link>
    </div>
  );
}