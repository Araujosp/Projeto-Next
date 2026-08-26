import "./cardProduto.css"

export default function cardProduto ({titulo, descricao, imagem, preco}){
    return(
    <div className="card-wrap">

        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <img src={"/img/" + imagem}/>
        <p>Preço: <b>{preco}</b></p>
    </div>
    )
}