import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TextInput } from "../../components/TextInput";
import { Container, Email, Faq } from "./styles";

export function Support(){
    return(
        <Container>
            <Header title="Suporte" subtitle="Entre em contato com a gente."/>
            <Faq>
                <h2>Perguntas Frequentes</h2>
                <div className="area-faq">
                    <div className="area-questions">
                        <p>pergunta</p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis 
                            exercitationem hic quisquam optio deleniti pariatur adipisci officiis 
                            dolorum, minus inventore. Sint eius, expedita eligendi quam exercitationem ad aliquid quo.
                        </span>
                    </div>
                    <div className="area-questions">
                        <p>pergunta</p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis 
                            exercitationem hic quisquam optio deleniti pariatur adipisci officiis 
                            dolorum, minus inventore. Sint eius, expedita eligendi quam exercitationem ad aliquid quo.
                        </span>
                    </div>
                    <div className="area-questions">
                        <p>pergunta</p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis 
                            exercitationem hic quisquam optio deleniti pariatur adipisci officiis 
                            dolorum, minus inventore. Sint eius, expedita eligendi quam exercitationem ad aliquid quo.
                        </span>
                    </div>
                    <div className="area-questions">
                        <p>pergunta</p>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nobis 
                            exercitationem hic quisquam optio deleniti pariatur adipisci officiis 
                            dolorum, minus inventore. Sint eius, expedita eligendi quam exercitationem ad aliquid quo.
                        </span>
                    </div>
                </div>
            </Faq>

            <Email>
                <input type="text" placeholder="Digite seu email aqui..." />
                <input className="big" type="text" placeholder="Digite o conteudo aqui..."/>
                <button>Enviar</button>
            </Email>

            <Footer/>
        </Container>
    )
}