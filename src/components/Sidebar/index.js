import React from 'react'
import { Container, Content } from './style'
import { 
  FaTimes, 
   
  
  
} from 'react-icons/fa'
import { MdPeopleAlt } from "react-icons/md";

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }
  const opcoesGerais = [ 'Região' ]
  const opcoesRegiao = ['Norte', 'Sudeste', 'Sul', 'Nordeste', 'Centro-Oeste', 'Todas']
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
<SidebarItem Icon={MdPeopleAlt} Text="Sobre Nós" />
      </Content>
    </Container>
  )
}

export default Sidebar