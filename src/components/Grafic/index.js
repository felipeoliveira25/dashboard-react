import { useState } from "react";
import { Container } from "./style";
import Papa from 'papaparse';


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

  

    return(
        <Container>
            <div className="barra-sup">
                <div className="grafic-aprov">
                  <p>Gráfico 1</p>
                  

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