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
      <Modal.Header style={{backgroundColor: '#010212'}}>
        <Modal.Title id="contained-modal-title-vcenter" style={{color: 'white', backgroundColor: '#010212'}}>
          Contact
        </Modal.Title>
        <Button style={{color: 'white', backgroundColor: '#010212', justifyContent: 'right', border: 0}}onClick={props.onHide}>X</Button>
      </Modal.Header>
      <Modal.Body style={{color: 'white', backgroundColor: '#010212'}}>
        <h4>Player Two</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer style={{color: 'white', backgroundColor: '#010212'}}>
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
        <Modal.Header style={{backgroundColor: '#010212'}}>
          <Modal.Title id="contained-modal-title-vcenter" style={{color: 'white', backgroundColor: '#010212'}}>
            Politique de confidentialité
          </Modal.Title>
          <Button style={{color: 'white', backgroundColor: '#010212', justifyContent: 'right', border: 0}}onClick={props.onHide}>X</Button>
        </Modal.Header>
        <Modal.Body style={{color: 'white', backgroundColor: '#010212'}}>
          <h4>Player Two</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer style={{color: 'white', backgroundColor: '#010212'}}>
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
          <Modal.Header style={{backgroundColor: '#010212'}}>
            <Modal.Title id="contained-modal-title-vcenter" style={{color: 'white', backgroundColor: '#010212'}}>
              Mentions Légales
            </Modal.Title>
            <Button style={{color: 'white', backgroundColor: '#010212', justifyContent: 'right', border: 0}}onClick={props.onHide}>X</Button>
          </Modal.Header>
          <Modal.Body style={{color: 'white', backgroundColor: '#010212'}}>
            <h4>Player Two</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer style={{color: 'white', backgroundColor: '#010212'}}>
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
            <Modal.Header style={{backgroundColor: '#010212'}}>
              <Modal.Title id="contained-modal-title-vcenter" style={{color: 'white', backgroundColor: '#010212'}}>
                Share
              </Modal.Title>
              <Button style={{color: 'white', backgroundColor: '#010212', justifyContent: 'right', border: 0}}onClick={props.onHide}>X</Button>
            </Modal.Header>
            <Modal.Body style={{color: 'white', backgroundColor: '#010212'}}>
              <h4>Player Two</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer style={{color: 'white', backgroundColor: '#010212'}}>
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
    <div style={{}}>

      <Nav className="headerFooter" style={{position: 'sticky', bottom: 0, justifyContent:"space-around", alignItems:"center" }} >

        <NavItem>
          <NavLink style={{padding: "0px", cursor:"pointer"}} onClick={() => setModalShowContact(true)}><img   src={require('../images/letter 1.svg')} alt="message"/></NavLink>
        </NavItem>
        <ContactModal
          show={modalShowContact}
          onHide={() => setModalShowContact(false)}
        />
        
        <NavItem>
          <NavLink onClick={() => setModalShowPolitique(true)} style={{color :'#EEEEF0', cursor:"pointer"}}>Politique de confidentialité</NavLink>
        </NavItem>
        <PolitiqueModal
          show={modalShowPolique}
          onHide={() => setModalShowPolitique(false)}
        />

        <NavItem>
          <NavLink onClick={() => setModalShowMention(true)} style={{color :'#EEEEF0', cursor:"pointer"}}>Mention Légales</NavLink>
        </NavItem>
        <MentionModal
          show={modalShowMention}
          onHide={() => setModalShowMention(false)}
        />

        <NavItem >
          <NavLink style={{padding: "0px", cursor:"pointer"}} onClick={() => setModalShowShare(true)}><img style={{}} src={require('../images/share 1.svg')}  alt="share"/></NavLink>
        </NavItem>
      </Nav >
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
