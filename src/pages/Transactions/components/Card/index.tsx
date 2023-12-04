import { Container } from "./styles";

interface CardProps{
    title: string;
    type: 'geral' | 'denied' | 'transition' | 'confirm';
    value:string;
}

export function Card({title, type, value}: CardProps){
    const colorBackground = () => {
        if(type === 'geral') return '#50A4B9'
        else if(type === 'denied') return '#F00530'
        else if(type === 'transition') return '#FBE137'
        else if(type === 'confirm') return '#16DB65'
    }
    
    return(
        <Container 
            color={colorBackground() as string}
        >
            <p>{title}</p>
            <span>{value}</span>
        </Container>
    )
}