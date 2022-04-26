import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import logo from '../img/logo.png';

const SHeader = styled.div`
    text-align: center;
    padding: 30px;
    background-color: #fff;
`;

const Header: React.FC<{}> = (): JSX.Element => {
  
  const navigate = useNavigate();
  
  return (
    <SHeader>
     <img src={logo} alt="logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}/>
    </SHeader>
  );
}

export default Header;