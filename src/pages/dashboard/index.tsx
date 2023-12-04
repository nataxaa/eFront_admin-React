import { Container } from "./styles";
import Bar from '../../components/Graphics/index'
import { HistoryTransactions } from "./components/HistoryTransactions";
import { CardResume } from "./components/CardsResume";
import  {Table}  from "../../components/Table";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import FormatValue from "../../utils/FormatValue";

export function Dashboard(){

  const dados = [
    { id: 1, data: "01/01/2023", nome: "João", localizacao: "Cidade A", valor: 100.00, situacao: "Ativo" },
    { id: 2, data: "02/01/2023", nome: "Maria", localizacao: "Cidade B", valor: 150.00, situacao: "Inativo" },
    // Adicione mais objetos conforme necessário
  ];
  
  const new_datas = dados.map(props=>({
    ...props,
    formatValue:FormatValue(props.valor)
  }))
  

    return(
        <Container>
            <Header 
              title="Olá, Natan"
              subtitle="Aqui estão as informações sobre suas vendas."
            />
            <div className="area-information">
            <Bar
              labelname="Planos Ativos x Cancelados x Bloqueados(AGUARDANDO FAZER O BACKEND)"
              categories={[
              {
                name: 'Receitas',
                color: '#9E6EFE',
              },
          
              ]}
              request={{
                2: {
                  Receitas: [1, 2, 5],
                },
              }}
            />
            <HistoryTransactions/>
            </div>
            <CardResume/>
            <Table
            title="Histórico de Compradores"
              columns={[
                {
                  header:'ID',
                  acessor:'id'
                },
                {
                  header:'Data',
                  acessor:'data'
                },
                {
                  header:'Nome',
                  acessor:'nome'
                },
                {
                  header:'Localização',
                  acessor:'localizacao'
                },
                {
                  header:'Valor',
                  acessor:'formatValue'
                },
                {
                  header:'Situação',
                  acessor:'situacao'
                },
              ]}
              datas={new_datas} 
            />

            <Footer/>
        </Container>
        
    )
}