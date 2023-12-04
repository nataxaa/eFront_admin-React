import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FaRegUser, FaCircle  } from "react-icons/fa";
import { Container } from './styles';
import { MdAttachMoney } from "react-icons/md";

const PieChart = () => {
  // Dados do gráfico de pizza
  const data = {
    labels: ['Investimento', 'Receita', 'Custo', 'Gasto'],
    datasets: [
      {
        data: [30, 40, 30, 10],
        backgroundColor: ['#33D69F', '#6F52ED', '#FFB800', '#FF4C61'],
      },
    ],
  };

  // Configurações do gráfico
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 80,
    legend: { display: false },
  };

  return (
    <Container>
        <div style={{position:'relative'}}>
            <Doughnut data={data} options={options} />
            <p style={{position:'absolute', top:'38%', left:'42%'}}><MdAttachMoney fontSize={40}/></p>
        </div>
        <div style={{display:'flex', flexDirection:'column', marginTop:'20px', gap:'20px'}}>
            <p style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                <FaCircle  color='#6F52ED'/> 
                Receita
                </div>
                <span>30</span> 
            </p>
            <p style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                <FaCircle  color='#FFB800'/> 
                Custo
                </div>
                <span>30</span>
            </p>
            <p style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                <FaCircle  color='#FF4C61'/> 
                Gasto
                </div>
                <span>30</span>
            </p>
            <p style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <div style={{display:'flex', alignItems:'center', gap:'5px'}}>
                    <FaCircle  color='#33D69F'/>
                    Investimento
                </div>
                <span>30</span>
            </p>
        </div>
    
    </Container>
  );
};

export default PieChart;