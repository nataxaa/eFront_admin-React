import { Container, TableMain } from "./styles";


interface Columns{
  header: string;
  acessor:string;
}

interface TableProps{
  columns: Columns[] 
  datas: any[]
}

export function Table({columns, datas}:TableProps){

    

function LinhaTabela({ line, acessor }:any) {
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
            <h1>Histórico de compradores</h1>
            <Tabela />
        </Container>
    )
}