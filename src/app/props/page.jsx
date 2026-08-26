import CardNoticia from "@/components/props"
import "./noticia.css"
export default function listaNoticias(){
    const listaNoticias = [
        {
            id: 1,
            titulo: "Avanço na Computação Quântica Promete Revolucionar a Criptografia",
            descricao: "Cientistas alcançam novo marco de estabilidade em qubits, reduzindo drasticamente a taxa de erros em processadores quânticos.",
            imagem: "computacaoQuantica.jpg",
            data: "2026-08-25",
            categoria: "Tecnologia"
        },
        {
            id: 2,
            titulo: "Inteligência Artificial Auxilia na Descoberta de Novos Antibióticos",
            descricao: "Algoritmos de aprendizado profundo identificaram compostos promissores contra bactérias multirresistentes a medicamentos.",
            imagem: "IA.webp",
            data: "2026-08-24",
            categoria: "Saúde"
        },
        {
            id: 3,
            titulo: "Telescópio Espacial Detecta Sinais de Água em Exoplaneta Próximo",
            descricao: "Análise espectroscópica revelou a presença de vapor de água e gases orgânicos na atmosfera de um planeta fora do sistema solar.",
            imagem: "telescopio.jpg",
            data: "2026-08-23",
            categoria: "Ciência"
        },
        {
            id: 4,
            titulo: "Energia Solar Alcança Novo Recorde de Eficiência em Painéis de Perovskita",
            descricao: "Nova tecnologia de células solares duplas atinge taxa de conversão superior a 33% em testes de laboratório.",
            imagem: "painelSolar.jpg",
            data: "2026-08-22",
            categoria: "Sustentabilidade"
        },
        {
            id: 5,
            titulo: "Lançamento da Rede 6G Inicia Primeiros Testes de Campo na Ásia",
            descricao: "Projectos-piloto demonstram velocidades de transmissão de dados até 100 vezes mais rápidas que o padrão 5G atual.",
            imagem: "6G.jpg",
            data: "2026-08-21",
            categoria: "Inovação"
        },
        {
            id: 6,
            titulo: "Baterias de Estado Sólido Prometem Dobrar Autonomia de Carros Elétricos",
            descricao: "Fabricantes anunciam a produção em massa das primeiras baterias mais leves, seguras e com recarga ultra-rápida.",
            imagem: "bydBateria.webp",
            data: "2026-08-20",
            categoria: "Automotivo"
        },
        {
            id: 7,
            titulo: "Exploração Marítima Mapeia Montanhas Submersas Inexploradas no Pacífico",
            descricao: "Mapeamento em alta resolução revela ecossistemas únicos e novas espécies em regiões de águas profundas.",
            imagem: "expansaoMaritma.jpg",
            data: "2026-08-19",
            categoria: "Meio Ambiente"
        },
        {
            id: 8,
            titulo: "Cidades Inteligentes Adotam IA para Otimizar o Tráfego Urbano",
            descricao: "Sistemas de semáforos adaptativos reduzem o tempo de deslocamento e a emissão de carbono em grandes metrópoles.",
            imagem: "cidadeInteligente.jpg",
            data: "2026-08-18",
            categoria: "Urbanismo"
        },
        {
            id: 9,
            titulo: "Novo Protocolo de Cibersegurança Protege Redes Contra Ataques em Massa",
            descricao: "Especialistas lançam padrão de criptografia pós-quântica para resguardar dados de infraestruturas críticas.",
            imagem: "ciberseguranca.png",
            data: "2026-08-17",
            categoria: "Segurança"
        },
        {
            id: 10,
            titulo: "Robótica Avançada Auxilia em Missões de Resgate em Áreas de Desastre",
            descricao: "Drones e robôs quadrupedes autônomos são implantados para localizar sobreviventes em locais de difícil acesso.",
            imagem: "roboticaAvancada.jpg",
            data: "2026-08-16",
            categoria: "Robótica"
        }
    ];
    return <>
        <h1>Lista de Noticias</h1>
    
    <div className="card-container">
        {listaNoticias.map(noticia => {
    
            return <CardNoticia
            key = {noticia.id}
            titulo = {noticia.titulo} 
            descricao = {noticia.descricao} 
            imagem = {noticia.imagem} 
            data = {noticia.data}
            categoria= {noticia.categoria}
             />
            
            })}
    </div>
    </>
}

