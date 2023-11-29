import { useState } from "react";
import { Container } from "./style";
import Papa from 'papaparse';
import Chart from 'react-apexcharts'


const Grafic = () => {

  

  const lerArquivo = (e) => {
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
  }
  const series = [{
    
    data: [97.2, 0]
    
  }, {
    name: 'Estadual',
    data: [98,0]
  }]

  const options = {
    options: {
      chart: {
        height: 350,
        type: 'bar',
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        
      },
      yaxis: {
        title: {
          text:'Taxa'
        }
      }
    }
  }

  
  

    return(
        <Container>
            <div className="barra-sup">
                <div className="grafic-aprov">
                  <p>Gráfico 1</p>
                  <Chart
                    options={options}
                    series={series}
                    type="bar"
                    width={350}/>
                  

                  <input type="file" accept=".csv" onChange={lerArquivo}></input>
                </div>
                <div className="box-dados">
                <p>Dados</p>
                <input type="file" accept=".csv" onChange={lerArquivo}></input>
                </div>
            </div>

            <div className="barra-inf">
                <div className="grafic-acess">
                <p>Gráfico 2</p>
                <input type="file" accept=".csv" onChange={lerArquivo}></input>
                </div>
                <div className="grafic-lab">
                <p>Gráfico 3</p>
                <input type="file" accept=".csv" onChange={lerArquivo}></input>
                </div>
                <div className="grafic-comput">
                <p>Gráfico 4</p>
                <input type="file" accept=".csv" onChange={lerArquivo}></input>
                </div>
            </div>
        </Container>
    )
}

export default Grafic