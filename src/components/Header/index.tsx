import { Container } from "./styles";
import { IoIosSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";

interface headerProps{
    title: string;
    subtitle:string;
}

export function Header({title, subtitle}: headerProps){
    return(
        <Container>
            <div className="area-title-text">
                <h1>{title}</h1>
                <span>{subtitle}</span>
            </div>
            <div className="area-icons">
                <IoIosSearch/>
                <FaRegBell/>
                <p>Natan Xavier</p>
            </div>
        </Container>
    )
}