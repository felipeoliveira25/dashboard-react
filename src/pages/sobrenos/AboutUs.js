import React from 'react'
import { Container } from './style'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import imgFelipe from '../../images/img-felipe.jpg'
import imgLara from '../../images/img-lara.jpg'
import imgEmanuel from '../../images/img-emanuel.jpg'
import imgMartins from '../../images/img-martins.jpg'
import imgGalindo from '../../images/img-galindo.jpg'
function AboutUs() {
  return (
        
        <Container>
          <Header title='Sobre Nós'/>

          <div className='fotos-equipe'>
            <p className='title-equipe'><strong>Equipe</strong></p>

            <div className='fotos'>
              <div className='foto-individual'>
              <img src={imgFelipe} alt='imagem Felipe'/>
              <p>Felipe Oliveira</p>
              </div>
              <div className='foto-individual'>
              <img src={imgLara} alt='imagem Lara'/>
              <p>Lara Gabrielle</p>
              </div>
              <div className='foto-individual'>
              <img src={imgEmanuel} alt='imagem Emanuel'/>
              <p>Lucas Emanuel</p>
              </div>
              <div className='foto-individual'>
              <img src={imgMartins} alt='imagem Martins'/>
              <p>Lucas Martins</p>
              </div>
              <div className='foto-individual'>
              <img src={imgGalindo} alt='imagem Galindo'/>
              <p>Lucas Galindo</p>
              </div>
            </div>
          </div>

          <div className='descricao-equipe'>
            <p className='title-descricao'><strong>Descrição</strong></p>
            <p className='descricao'>Dashboard criado por estudantes do curso de Sistemas para Internet, da Universidade Católica de Pernambuco. O projeto tem o objetivo de mapear <br/> as regiões que possuem maior acesso à tecnologia no país. Por meio de gráficos,  podemos analisar a quantidade de escolas ( Municipais e Estaduais ) <br/> que possuem acesso à internet, quantidade de laboratórios e a quantidade de computadores disponibilizados para os alunos. <br/> As informções constadas nos gráficos são referentes aos microdados do Censo Escolar de 2021, disponibilizados pelo INEP.</p>
          </div>

          <Footer/>
        </Container>

       
        
    
  )
}

export default AboutUs