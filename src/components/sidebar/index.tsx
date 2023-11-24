import { Container, FooterSideBar, ListPages } from "./styles";
import { RxDashboard } from "react-icons/rx";
import { IoWalletOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { HiUsers } from "react-icons/hi";
import { BsGear } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";

export function Sidebar(){
    return (
        <Container>
            <h2><span>e</span>Front</h2>
            <ListPages>
                <p><RxDashboard/> DASHBOARD</p>
                <p><IoWalletOutline/> CARTEIRA</p>
                <p><LuShoppingCart/> TRANSAÇÕES</p>
                <p><HiUsers/> SUPORTE</p>
            </ListPages>
            <FooterSideBar>
                <p><BsGear/> AJUSTES</p>
                <p><FaPowerOff/> DESCONECTAR</p>
            </FooterSideBar>
        </Container>
    )
}