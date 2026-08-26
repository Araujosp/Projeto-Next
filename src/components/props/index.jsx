import "./props.css"

export default function cardNoticia ({titulo, descricao, imagem, data, categoria}){
    return(
    <div className="card-wrap">

        <h2>{titulo}</h2>
        <p>{descricao}</p>
        <img src={"/img/" + imagem}/>
        <p>Data: <b>{data}</b></p>
        <p>Categoria: {categoria}</p>
    </div>
    )
}