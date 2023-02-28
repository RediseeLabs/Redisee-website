import styled from 'styled-components';
import { light, primaryBlue, secondary } from './variables';

export const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  background-color: white;
  > ul {
    display: flex;
    padding: 0;
    list-style-type: none;
    margin-right: 50px;
    > li {
      margin-right: 25px;
    }
  }
`;

export const Button = styled.a`
  color: ${(props) => (props.product ? 'white' : `black`)};
  padding: 10px 15px;
  margin-right: 20px;
  border-radius: 10px;
  border: 2px solid transparent;
  background-color: ${(props) => (props.product ? primaryBlue : `transparent`)};
  :hover {
    background-color: ${(props) => (props.product ? `white` : light)};
    color: black;
  }
  :active {
    background-color: #537fe7;
    color: black;
  }
`;

export const List = styled.div`
  display: flex;
  margin-right: 60px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 30px;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
  h2 {
    font-size: 1.7em;
    font-weight: 700;
    color: #4480ed;
  }
  img {
    width: 50px;
    object-fit: fill;
    margin-right: 15px;
  }
`;
