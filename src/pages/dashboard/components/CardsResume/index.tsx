import { Card, Container } from "./styles";
import { FaArrowTrendUp, FaArrowTrendDown  } from "react-icons/fa6";

export function CardResume(){
    return(
        <Container>
            <Card>
                <p>Total de Vendas</p>
                <h3>R$ 3.265,21</h3>
                <span><FaArrowTrendUp color="#0BB07B" />+11%</span>
            </Card>
            <Card>
                <p>Total líquido</p>
                <h3>R$ 2.825,58</h3>
                <span><FaArrowTrendUp color="#0BB07B" />+15%</span>
            </Card>
            <Card>
                <p>Compras canceladas</p>
                <h3>R$ 130,00</h3>
                <span className="receives"><FaArrowTrendDown color="#F03D3D" />-80%</span>
            </Card>
            <Card>
                <p>Reembolsos</p>
                <h3>R$ 345,00</h3>
                <span className="receives"><FaArrowTrendDown color="#F03D3D" />-78%</span>
            </Card>
        </Container>
    )
}