

const options: any = {
  responsive: true,
  maintainAspectRatio: true,
  legend: { display: false },
  tooltips: {
    enabled: true,
    mode: 'single',
    intersect: false,
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.8)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    titleFontColor: '#fbfbfd',
    bodyFontColor: '#fbfbfd',
    footerFontColor: '#01e9b5',
    titleAlign: 'left',
    titleMarginBottom: 20,
    cornerRadius: 15,
    xPadding: 20,
    yPadding: 20,
  },
  layout: {
    padding: 0,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 125,
          padding: 20,
          fontColor: '#9a9a9a',
        },
        barThickness: 30,
        
      },
    ],
    yAxes: [
      {
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: 'transparent',
        },
        ticks: {
          padding: 20,
          beginAtZero: true,
          fontColor: '#9a9a9a',
        },
      },
    ],
  },
  
};

export default options;
