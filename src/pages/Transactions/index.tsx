import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Table } from "../../components/Table";
import { TextInput } from "../../components/TextInput";
import FormatValue from "../../utils/FormatValue";
import { Card } from "./components/Card";
import { AddArea, AreaCards, BodyTransaction, Container } from "./styles";

export function Transactions(){


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
                title="Transações"
                subtitle="Visualize todas suas transações."
            />
            <BodyTransaction>
                <AreaCards>
                    <Card
                        title="Saldo Geral"
                        type="geral"
                        value="R$ 100,00"
                    />
                    <Card
                        title="Pendentes"
                        type="transition"
                        value="R$ 100,00"
                    />
                    <Card
                        title="Confirmadas"
                        type="confirm"
                        value="R$ 100,00"
                    />
                    <Card
                        title="Negadas"
                        type="denied"
                        value="R$ 100,00"
                    />
                </AreaCards>
                <AddArea>
                    <h2>Adicionar Receita</h2>
                    <div>
                        <TextInput placeholder="Exemplo..."/>
                        <TextInput placeholder="Exemplo..."/>
                        <TextInput placeholder="Exemplo..."/>
                    </div>
                    <button>Adicionar</button>
                </AddArea>
            </BodyTransaction>
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