import styled from 'styled-components';
//estilização grafico
export const Container = styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }
  

  .barra-sup{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap:56px;
    margin-top: 30px;
    margin-left: 50px;
    margin-right:50px
  }
  
    

  .grafic-aprov, .box-dados{
    
    background-color:#F5F5F5;
    width: 500px;
    height: 250px;
    color: black;
    display:flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    
  }

  .barra-inf{
    display: flex;
    flex-direction: row;
    gap: 30px;
    margin-top: 30px;
    justify-content: center;

  }

  .grafic-acess, .grafic-lab, .grafic-comput{
    width: 333px;
    height: 250px;
    background-color:#F5F5F5;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
  }
  .titulo-graf{
    border-bottom: 1px solid #000;
    margin: 0;
    padding: 0;
    position: static;
  }
`;