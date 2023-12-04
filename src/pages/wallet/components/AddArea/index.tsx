import { TextButton } from "../../../../components/TextButton";
import { TextInput } from "../../../../components/TextInput";
import { Container } from "./styles";

export function AddArea(){
    const handleSubmit = () => {
        alert('Receita Adicionada')
    }

    return(
        <Container>
            <h2>Adicione a Receita.</h2>
            <form onSubmit={handleSubmit} className="area-form">
                <input 
                    className="input-form"
                    type="text" 
                />
                <input 
                    className="input-form"
                    type="text" 
                />
                <input 
                    className="input-form"
                    type="text" 
                />
                <TextButton
                    
                >
                    Adicionar
                </TextButton>
            </form>
        </Container>
    )
}