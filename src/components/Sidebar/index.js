import React from 'react'

import { Container, Content } from './style'
import { FaTimes, FaHome} from 'react-icons/fa'
import { MdPeopleAlt } from "react-icons/md";

import SidebarItem from '../SidebarItem'
import { useNavigate } from 'react-router-dom';


const Sidebar = ({ active }) => {
  

  const closeSidebar = () => {
    active(false)
  }

  
 
  const opcoesGerais = [ 'Região' ]
  const opcoesRegiao = ['Norte', 'Sudeste', 'Sul', 'Nordeste', 'Centro-Oeste', 'Todas']
  const navigate = useNavigate();
  const goToAboutUsPage = () => {
    navigate('/aboutus')
  }
  const goToHomePage = () => {
    navigate('/')
  }
  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <p className = 'title-side'>Categorias</p>
      <Content>
      <div className='drop-down'>
           {opcoesGerais.map((texto, index) => (
            <div className='drop-card' key={index}>
                <label>{texto}</label>
                <select>
                    {opcoesRegiao.map((text, subIndex) => (
                        <option key={subIndex}>{text}</option>
                    ))}
                </select>
            </div>
           ))}
        </div>

<div className='botoes'>
  <button onClick = {goToHomePage} ><SidebarItem Icon={FaHome} Text="Home"   /></button>
  <button onClick = {goToAboutUsPage} ><SidebarItem Icon={MdPeopleAlt} Text="Sobre Nós"   /></button>
</div>






      </Content>
    </Container>
  )
}

export default Sidebar