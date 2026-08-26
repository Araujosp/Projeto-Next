import CardProduto from "@/components/cardProduto"
import "./produto.css"

export default function Produtos (){

const listaProdutos = [
    {
        id:1,
        titulo:"MacBook pro m5",
        descricao:"Um notebook superior a todos os outros",
        imagem: "macbook.webp",
        preco: 16.999,
    },
    {
        id:2,
        titulo:"Monitor",
        descricao:"Acompanha HDR e IPS",
        imagem: "monitor.png",
        preco: 987.20,
    },
    {
        id:3,
        titulo:"Mouse MX Logitech",
        descricao:"O melhor que a tecnologia tem a oferecer",
        imagem: "mouse.gif",
        preco: 678.83,
    }
    
];

    return <>
    
    <h1>Listagem de produtos</h1>

<div className="card-container">
    {listaProdutos.map(produto => {

        return <CardProduto
        key = {produto.id}
        titulo = {produto.titulo} 
        descricao = {produto.descricao} 
        imagem = {produto.imagem} 
        preco = {produto.preco} />
        
        })}
</div>

    </>
}