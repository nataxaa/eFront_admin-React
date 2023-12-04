import PieChart from "../../components/Dought";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import  {Table}  from "../../components/Table";
import  FormatValue  from "../../utils/FormatValue";
import { AddArea } from "./components/AddArea";
import { Container } from "./styles";

export function Wallet(){
    const transacoes = [
        { Receita: "Venda de produtos", Data: "2023-11-24", Valor: 1500, Categoria: "Vendas", Situacao: "Concluído" },
        { Receita: "Freelance", Data: "2023-11-25", Valor: 800, Categoria: "Serviços", Situacao: "Pendente" },
        { Receita: "Aluguel", Data: "2023-11-26", Valor: -1200, Categoria: "Moradia", Situacao: "Concluído" },
        // Adicione mais objetos conforme necessário
      ];

    const new_transactions = transacoes.map(props=>({
        ...props,
        formatValue: FormatValue(props.Valor)

    }))

    return(
        <Container>
            <Header 
              title="Carteira"
              subtitle="Olhe suas receitas aqui."
            />
            <div style={{display:'grid', gridTemplateColumns:"1fr 3fr", gap:'10px'}}>
                <PieChart/>
                <AddArea/>
            </div>
            <Table
                title="Transações"
                columns={[
                    {
                        header:'Receita',
                        acessor: 'Receita'
                    },
                    {
                        header:'Data',
                        acessor: 'Data'
                    },
                    {
                        header:'Valor',
                        acessor: 'formatValue'
                    },
                    {
                        header:'Categoria',
                        acessor: 'Categoria'
                    },
                    {
                        header:'Situação',
                        acessor: 'Situacao'
                    },
                ]}
                datas={new_transactions}
            
            />
            <Footer/>
        </Container>
    )
}