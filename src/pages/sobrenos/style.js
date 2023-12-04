import styled from "styled-components";

export const Container = styled.div `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    width: 100vw;
    height: 100vh;
    background-color: #FFF;
    font-family: 'Poppins', sans-serif;




    .fotos-equipe{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    }

    .fotos{
      display: flex;
      margin-top: 20px;
      gap: 70px;

    }
    

    .foto-individual > img{
      width: 172px;
      height: 172px;
      border-radius: 50%;
      display: flex;
      
     
      
    }
    .foto-individual {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      

    }

    .foto-individual > p {
      font-family: 'Poppins', sans-serif;
      
    }

    .title-equipe{
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      border-bottom: 1px solid #000;
      margin-bottom: 10px;
    }

    .descricao-equipe{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-top: 70px;
    }

    .title-descricao{
      font-family: 'Poppins', sans-serif;
      font-size: 20px;
      border-bottom: 1px solid #000;
      margin-bottom: 10px;
    }

  
  
    
 
`
