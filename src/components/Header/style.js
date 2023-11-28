import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #FFF; 
  border-bottom: 1px solid #000;
  

  > svg {
    position: fixed;
    color: black;
    width: 30px;
    height: 30px;
    
    margin-left: 32px;
    cursor: pointer;
  }
  .title{
    margin-left: 600px
  }
`;