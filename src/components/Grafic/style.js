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
    height: 150px;
    background-color:#F5F5F5;

  }
`;