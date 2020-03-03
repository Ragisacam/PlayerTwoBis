import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Button,
  Col,
  Card,
/*   CardImg,
  CardBody,
  CardTitle,
  CardText, */
  ListGroup,
  ButtonToolbar,
  Modal,
  Container,
  } from 'react-bootstrap'  ; 



function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Qui sommes-nous ?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          <Modal.Footer>
            <Button onClick={props.onHide}>Fermer</Button>
          </Modal.Footer>
        </Modal>
      );
    }

 function ScreenHome() {
      const [modalShow, setModalShow] = React.useState(false);

  return (
      <div>
      
<div>
      <Link to="/ScreenMatchPage">
      <Button color="primary" size="lg">Find your player 2</Button>{' '}

            {/* un bouton centré (en forme de triangle/flèche) avec pour cible la page inscription jeu
            route GET à positionner sur ce bouton */}

      </Link> 



<Container fluid className="backgroundColor" >
{/* La big DIV pour se mettre en flexwrap ! */}
<row>
<Col>1 of 3</Col>
<Card body bg="dark">

      <div> 
            {/* C'est une modal
            modèle trouvé ici : https://react-bootstrap.github.io/components/modal/ 
            Est-ce qu'on écrit quelque chose ou on met des liens vers nos homepage perso/profil linkedin ?
            */ }



    <ButtonToolbar>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Qui sommes-nous ?
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>

      </div>
      </Card>
      <Col>1 of 3</Col>
      <Card body bg="dark">
    <div>
        Jeux prisés sur P2
        <ListGroup>
          {/* C'est une liste générée par le backend au chargement de cette page (route '/homepage') */}
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
    </div>
    </Card>
</row>

<row>
<Col>1 of 3</Col>
    <Card body bg="dark">
    <div>
          Actu player Two 
          <ListGroup>
          {/* C'est une liste générée par le backend au chargement de cette page (route '/homepage') */}
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
    </div>
    </Card>
</row>
<Col>1 of 3</Col>
    <Card body bg="dark">
    <div>
          Comment ça marche ?
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.</p>
    </div>
    </Card>
    <Col>1 of 3</Col>
    <Card body bg="dark">
    <div>
          Jeux populaires
                {/* C'est une liste générée par le backend au chargement de cette page (route /homepage) */}
    </div>
    </Card>

    <Col>1 of 3</Col>
    <Card body bg="dark">
    <div>
          Notre philosophie
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.</p>
    </div>
    </Card>
    
    <Col>1 of 3</Col>
    <Card body bg="dark">
    <div>Actualité du jeu vidéo
                {/* C'est une liste générée par le backend au chargement de cette page (route /homepage)
                On s'oriente vers une intégration de flux RSS ici (à confirmer ultérieurement)
            -->*/}
    </div>
    </Card>


</Container>
</div>
</div>
);
}

export default ScreenHome