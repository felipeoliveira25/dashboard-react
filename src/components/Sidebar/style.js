import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
  background-color: #5A6ACF;
  position: fixed;
  color: #FFF;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;
  font-family: 'Poppins', sans-serif;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  .title-side{
    color: #FFF;
    margin-left: 120px;
    margin-top: 35px;
    font-size: 20px;
    margin-bottom: -105px;
    border: none;
    
  }

  .botoes{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  button{
  display: flex;
  align-items: center;
  background-color: #FFF; 
  font-size: 20px;
  color: #5A6ACF;
  cursor: pointer;
  border-radius: 20px;
  width: 228px;
  margin-left: 30px;
  border: none;
  
  font-family: 'Poppins', sans-serif;
  }

  button:hover {
    background-color: gray;
    color:white;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 150px;
`;