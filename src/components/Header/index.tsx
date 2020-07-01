import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <NavLink to="/">
        <img src={Logo} alt="GoFinances" />
      </NavLink>
      <nav>
        <NavLink to="/" activeClassName="is-active" exact>
          Listagem
        </NavLink>
        <NavLink to="/import" activeClassName="is-active">
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
