import React, {useContext} from 'react';
import styled, {css} from 'styled-components';
import {MenuContext} from './context/NavState';

const Menu = styled.nav`
  position: absolute;
  overflow:hidden;
  overflow-x:hidden;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 30%;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 72px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #212121;
  transform: translateX(1680px);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
    props.open &&
    css`
      transform: translateX(234%);
    `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-left: 16%;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  line-height: 120%;
  font-weight: 500;
  border-bottom: 1px sold #282828;

  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({children}) => {
  const {isMenuOpen} = useContext(MenuContext);

  return <Menu open={isMenuOpen}>{children}</Menu>;
};


SideMenu.defaultProps = {
  children: (
      <>
        <MenuLink href="/">Главная</MenuLink>
        <MenuLink href="/articles">Статьи</MenuLink>
        <MenuLink href="/about">О сайте</MenuLink>
        <MenuLink href="/contact">Контакт</MenuLink>
      </>
  ),
};