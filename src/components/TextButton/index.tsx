import { ButtonHTMLAttributes } from "react";
import { Container, Loader } from "./styles";
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    background?: string;
    children: React.ReactNode
    ref?: React.RefObject<HTMLButtonElement>;
    loading?: boolean;
}

export function TextButton({ color, loading, ref, background, children, ...rest }: ButtonProps) {
    return (
        <Container ref={ref} {...rest}>
            {loading ?
                <Loader>
                    <AiOutlineLoading3Quarters color="#FFF" />
                </Loader>
                :
                <>
                    {children}
                </>
            }
        </Container>
    )
}