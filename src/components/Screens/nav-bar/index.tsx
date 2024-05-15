import React, { useState } from 'react';
import {DropDownMenu, IconContainer, Nav, NavItem, NavMenu } from './styles';
import {search} from 'react-icons-kit/feather/search'
import {Icon} from 'react-icons-kit';
import Logo from '../shared/logo-button';
import {x} from 'react-icons-kit/feather/x';
import {shoppingCart} from 'react-icons-kit/feather/shoppingCart';
import {menu} from 'react-icons-kit/feather/menu'
import { useWindowSize } from '../../../hooks/windows-size';


const Navbar = () => {
  
  const size = useWindowSize();
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {
        size && size.width && size.width >= 768 ? (
          <Nav>
            <NavMenu>
              <Logo></Logo>
            </NavMenu>
            <NavMenu>
              <NavItem href="#">ROPAS</NavItem>
              <NavItem href="#">CUIDADO PERSONAL</NavItem>
              <NavItem href="#">VARIADOS</NavItem>
            </NavMenu>
            <NavMenu>
              <IconContainer>
                <Icon icon={search} size={20}/>
              </IconContainer>
              <IconContainer>
                <Icon icon={shoppingCart} size={20}/>
              </IconContainer>
            </NavMenu>        
        </Nav>
        ):(   
          <Nav>
            <NavMenu>
              <IconContainer onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <Icon icon={x} size={25}/> : <Icon icon={menu} size={25}/>}
              </IconContainer>
              {isOpen && (
                <DropDownMenu>
                <NavItem href="#">ROPAS</NavItem>
                <NavItem href="#">CUIDADO PERSONAL</NavItem>
                <NavItem href="#">VARIADOS</NavItem>
              </DropDownMenu>
              )}              
            </NavMenu>
            <NavMenu>
              <Logo></Logo>
            </NavMenu>
            <NavMenu>
              <IconContainer>
                <Icon icon={search} size={20}/>
              </IconContainer>
              <IconContainer>
                <Icon icon={shoppingCart} size={20}/>
              </IconContainer>
            </NavMenu>    
          </Nav>             
        )
      }
    </>
  );
};

export default Navbar;
