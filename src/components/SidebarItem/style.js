import styled from 'styled-components';
//estilização para cada item do sidebar ao abrir
export const Container = styled.div`


  display: flex;
  align-items: center;
  background-color: #FFF; 
  font-size: 20px;
  color: #5A6ACF;
  cursor: pointer;
  border-radius: 20px;
  width: 228px;
  margin-left: 30px;
  

  > svg {
    margin: 0 28px;
  }

  &:hover {
    background-color: gray;
    color:white;
  }
`;