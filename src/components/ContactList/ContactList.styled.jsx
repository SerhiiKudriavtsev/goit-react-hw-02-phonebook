import styled from '@emotion/styled';

export const List = styled.ul`
  width: 400px;
  padding: 20px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  :nth-of-type(odd) {
    background-color: #F5F5F5;
  }
  // :nth-of-type(even) {
  //   background-color: #FFFAFA;
  // }
`;
export const Name = styled.p`
  width: 45%;
  padding: 5px;
  font-size: 18px;
`;
export const Number = styled.p`
  padding: 5px;
  font-size: 18px;
`;
export const Button = styled.button`
  padding: 5px;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
    color: red;
    font-weight: bold;
  };
`;
