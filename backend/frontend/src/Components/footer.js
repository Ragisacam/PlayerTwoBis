import React from 'react';
import '../App.css';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Footer() {
  return (
    <div>

      <Nav className="headerFooter" style={{ justifyContent:"space-around", alignItems:"center" }} >
        <NavItem>
          <NavLink><img src={require('../images/message.png')} alt="message"/></NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color :'white'}}>Politique de confidentialité</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{color :'white'}}>Mention Légales</NavLink>
        </NavItem>
        <NavItem>
          <NavLink><img src={require('../images/share.png')} alt="share"/></NavLink>
        </NavItem>
      </Nav>

    </div>
    );
}

export default Footer;

//contact
  //modal
    // identité (mail de l'expéditeur)
    // object
    // content
    // envoi mail

//politique de confidentialité
  // modal
    // content

// Mention légal
  //modal
    //content

// Mention légal
  //modal
    // redirect vers social network (linkedin, facebook)
