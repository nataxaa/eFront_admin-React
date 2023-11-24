import  {Table}  from "../../components/Table";
import { Container } from "./styles";

export function Wallet(){
    const transacoes = [
        { Receita: "Venda de produtos", Data: "2023-11-24", Valor: 1500, Categoria: "Vendas", Situacao: "Concluído" },
        { Receita: "Freelance", Data: "2023-11-25", Valor: 800, Categoria: "Serviços", Situacao: "Pendente" },
        { Receita: "Aluguel", Data: "2023-11-26", Valor: -1200, Categoria: "Moradia", Situacao: "Concluído" },
        // Adicione mais objetos conforme necessário
      ];

    return(
        <Container>
            {/**
             * 
            <Table
                columns={[
                    {
                        name:'Receita'
                    },
                    {
                        name:'Data'
                    },
                    {
                        name:'Valor'
                    },
                    {
                        name:'Categoria'
                    },
                    {
                        name:'Situação'
                    },
                ]}
                datas={transacoes}
            
            />
                    */}
        </Container>
    )
}