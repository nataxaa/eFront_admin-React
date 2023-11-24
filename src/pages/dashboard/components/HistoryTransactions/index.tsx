import React from "react";
import { Container } from "./styles";
import { ListTransactions } from "./styles";

export function HistoryTransactions(){

    const arrayDeObjetos = [
        { id: '1', name: 'Segunda-Feira', value: 'R$ 200,00' },
        { id: '2', name: 'Sexta-Feira', value: 'R$ 200,00' },
        { id: '3', name: 'Ontem', value: 'R$ 200,00' }
    ];

    return(
        <Container>
            <h3>Histórico de transações</h3>
            <ListTransactions>
                {arrayDeObjetos.map(props=>(
                    <div className="area-item">
                        <p>{props.name}</p>
                        <span>{props.value}</span>
                    </div>
                ))}
            </ListTransactions>
        </Container>
    )
}