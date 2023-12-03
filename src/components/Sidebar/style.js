import styled from 'styled-components';

export const Container = styled.div`
  background-color: #5A6ACF;
  position: fixed;
  color: #FFF;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${props => props.sidebar ? '0' : '-100%'};
  animation: showSidebar .4s;

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
  }

  button:hover {
    background-color: gray;
    color:white;
  }

  .drop-down{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    
  }

  .drop-card{
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    
    margin-top:-30px;
  }

  .drop-card > label{
    margin-bottom: -20px;
  }

  .drop-card > select{
    width: 228px;
    height: 40px;
    border-radius: 20px;
    outline: none;
    color: #5A6ACF;
    justify-content:space-around;
    font-family: 'Poppins', sans-seriff;
    
  }

  .drop-card > select > option{
    
    display:flex;
    padding-left: 20px;
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
  margin-top: 100px;
`;