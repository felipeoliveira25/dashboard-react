import { useState } from "react";
import { Container } from "./style";
import Papa from 'papaparse';
import Chart from 'react-apexcharts'


const Grafic = () => {

  

  {/*const lerArquivo = (e) => {
    const arquivo = e.target.files[0];

    if(arquivo){
      Papa.parse(arquivo, {
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          console.log(result.data)
          
        },
        error: (error) => {
          alert('Erro ao analisar o arquivo CSV:', error.message)
        }
      })
    }
  }*/}
  const series1 = [{
   data: [97.3, 97.2]

    
  }]

  const options1 = {
      chart: {
        height: 1000,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '30%'
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Municipal', 'Estadual']
      },
      yaxis: {
        title: {
          text:'Taxa Aprov'
        }
      }
    }

    const series2 = [{
      data:[409617, 8636, 18973]
    }]
  
    const options2 = {
      chart: {
        height: 1000,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '60%'
          
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Computador', 'Laboratório', 'Internet']
      },
      yaxis: {
        title: {
          text:'Quantidade'
        },
        max: 50000,
        min: 0,
        forceNiceScale: false,
        tickAmount: 3,
      }
    }
    const series3 = [{
      data:[7499, 35027, 9175, 37237, 19146]
    }]
    const options3 = {
      chart: {
        height: 1000,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '60%'
          
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul']
      },
      yaxis: {
        title: {
          text:'Quantidade'
        },
        max: 50000,
        min: 0,
        forceNiceScale: false,
        tickAmount: 3,
      }
    }
    const series4 = [{
      data:[3570, 10820, 3374, 18807, 8844]
    }]
    const options4 = {
      chart: {
        height: 1000,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '60%'
          
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul']
      },
      yaxis: {
        title: {
          text:'Quantidade'
        },
        max: 20000,
        min: 1000,
        forceNiceScale: false,
        tickAmount: 3,
      }
    }
    const series5 = [{
      data:[495970, 815988, 212707, 2451692, 756421]
    }]
    const options5 = {
      chart: {
        height: 1000,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '60%'
          
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul']
      },
      yaxis: {
        title: {
          text:'Quantidade'
        },
        max: 2460000,
        min: 0,
        forceNiceScale: false,
        tickAmount: 3,
      }
    }

  
  

    return(
        <Container>
            <div className="barra-sup">
                <div className="grafic-aprov">
                  <p className="titulo-graf">Taxa Aprovação (Brasil)</p>
                  <Chart
                    options={options1}
                    series={series1}
                    type="bar"
                    width={350}/>
                  

                  {/*<input type="file" accept=".csv" onChange={lerArquivo}></input>*/}
                </div>
                <div className="box-dados">
                <p className="titulo-graf">Acesso (Brasil)</p>
                <Chart
                    options={options2}
                    series={series2}
                    type="bar"
                    width={350}/>
                {/*<input type="file" accept=".csv" onChange={lerArquivo}></input>*/}
                </div>
            </div>

            <div className="barra-inf">
                <div className="grafic-acess">
                <p className="titulo-graf">Acesso à internet</p>
                <Chart
                    options={options3}
                    series={series3}
                    type="bar"
                    width={320}/>
                {/*<input type="file" accept=".csv" onChange={lerArquivo}></input>*/}
                </div>
                <div className="grafic-lab">
                <p className="titulo-graf">Lab. Informática</p>
                <Chart
                    options={options4}
                    series={series4}
                    type="bar"
                    width={320}/>
                {/*<input type="file" accept=".csv" onChange={lerArquivo}></input>*/}
                </div>
                <div className="grafic-comput">
                <p className="titulo-graf">Qtd. Computadores</p>
                <Chart
                    options={options5}
                    series={series5}
                    type="bar"
                    width={320}/>
                {/*<input type="file" accept=".csv" onChange={lerArquivo}></input>*/}
                </div>
            </div>
        </Container>
    )
}

export default Grafic