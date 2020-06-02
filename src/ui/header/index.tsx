import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import styled from 'Theme/styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.Palette.greyBlue[500]};
  opacity: ${({ theme }) => theme.Emphasis.high};
`;

const Header: FunctionComponent = () => (
  <div>
    <Title>My App</Title>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </div>
);

export default Header;
