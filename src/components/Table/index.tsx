import { Input } from "../TextInput/styles";
import { Container, TableMain } from "./styles";


interface Columns{
  header: string;
  acessor:string;
}

interface TableProps{
  columns: Columns[] 
  datas: any[]
  title:string;
}

export function Table({columns, datas, title}:TableProps){

    

function LinhaTabela() {
  return (
    <>
      {datas.map((linha, index) => (
        <tr key={index}>
          {columns.map((coluna, colunaIndex) => (
            <td key={colunaIndex}>{linha[coluna.acessor]}</td>
            ))}
        </tr>
      ))}
    
      </>
  );
}

function Tabela() {
    return (
      <TableMain>
        <thead>
          <tr>
            {columns.map(props=>(  
            <th>{props.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          
            <LinhaTabela/>
          
        </tbody>
      </TableMain>
    );
  }

    return(
        <Container>
          <div className="header-table">
            <h1>{title}</h1>

            <Input placeholder="Busque a receita..."/>
          </div>
            <Tabela />
        </Container>
    )
}