import React from 'react';
import '../App.css';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import { Modal } from 'react-bootstrap'; 

function ContactModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Contact</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );
  }

  function PolitiqueModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Politique de confidentialité
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Politique de confidentialité</h4>
          <p>
            Pero pero pero porke
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      );
    }

    function MentionModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Mention Légales
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Mention Légales</h4>
            <p>
              waifu
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        );
      }

      function ShareModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Share
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Share</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
          );
        }
  


function Footer() {

  const [modalShowContact, setModalShowContact] = React.useState(false);
  const [modalShowPolique, setModalShowPolitique] = React.useState(false);
  const [modalShowMention, setModalShowMention] = React.useState(false);
  const [modalShowShare, setModalShowShare] = React.useState(false);

  return (
    <div>

      <Nav className="headerFooter" style={{ justifyContent:"space-around", alignItems:"center" }} >

        <NavItem>
          <NavLink onClick={() => setModalShowContact(true)}><img src={require('../images/message.png')} alt="message"/></NavLink>
        </NavItem>
        <ContactModal
          show={modalShowContact}
          onHide={() => setModalShowContact(false)}
        />
        
        <NavItem>
          <NavLink onClick={() => setModalShowPolitique(true)} style={{color :'white'}}>Politique de confidentialité</NavLink>
        </NavItem>
        <PolitiqueModal
          show={modalShowPolique}
          onHide={() => setModalShowPolitique(false)}
        />

        <NavItem>
          <NavLink onClick={() => setModalShowMention(true)} style={{color :'white'}}>Mention Légales</NavLink>
        </NavItem>
        <MentionModal
          show={modalShowMention}
          onHide={() => setModalShowMention(false)}
        />

        <NavItem>
          <NavLink onClick={() => setModalShowShare(true)}><img className='footerIcons' src={require('../images/share.png')} alt="share"/></NavLink>
        </NavItem>
      </Nav>
      <ShareModal
          show={modalShowShare}
          onHide={() => setModalShowShare(false)}
        />

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

//mettre le style sur les images
