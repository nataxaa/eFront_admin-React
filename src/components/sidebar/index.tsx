import { Container, FooterSideBar, ListPages } from "./styles";
import { RxDashboard } from "react-icons/rx";
import { IoWalletOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { HiUsers } from "react-icons/hi";
import { BsGear } from "react-icons/bs";
import { FaPowerOff } from "react-icons/fa";
import {Link} from 'react-router-dom'

export function Sidebar(){
    return (
        <Container>
            <h2><span>e</span>Front</h2>
            <ListPages>
                <Link className="links" to={'/'}>
                    <p><RxDashboard/> DASHBOARD</p>
                </Link>
                <Link className="links" to={'/wallet'}>
                    <p><IoWalletOutline/> CARTEIRA</p>
                </Link>
                <Link className="links" to={'/transaction'}>
                    <p><LuShoppingCart/> TRANSAÇÕES</p>
                </Link>
                <Link className="links" to={'/support'}>
                    <p><HiUsers/> SUPORTE</p>
                </Link>
            </ListPages>
            <FooterSideBar>
                <p><BsGear/> AJUSTES</p>
                <p><FaPowerOff/> DESCONECTAR</p>
            </FooterSideBar>
        </Container>
    )
}