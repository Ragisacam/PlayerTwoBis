import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Card, CardColumns, FormGroup, ListGroup, Modal,} from 'react-bootstrap'  ; 

function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
                  >
          <Modal.Header closeButton style={{color: 'white', backgroundColor: '#010212'}}>
            <Modal.Title id="contained-modal-title-vcenter" style={{color: 'white', backgroundColor: '#010212'}}>
              Qui sommes-nous ?
            </Modal.Title>
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
            <Button onClick={props.onHide} >Fermer</Button>
          </Modal.Footer>
        </Modal>
      );
    }

 function ScreenHome() {
      const [modalShow, setModalShow] = React.useState(false);

  return (
<div className="backgroundColor">
      
  <div>
        <FormGroup className="nextButton boldFont" style={{margin:0, paddingTop:25, justifyContent:"center"}} row>
              <Link>
                <img src={require('../images/button.png')} alt="button start"/>
                <div className="textButton">Start</div>
              </Link>
        </FormGroup>
  </div>

<CardColumns style={{paddingTop:25}}>

 {/*  Modal qui sommes-nous ? */}
  <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
      <Link variant="primary" onClick={() => setModalShow(true)}>
      <Card.Title>Qui sommes-nous ?</Card.Title>
      </Link>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </Card>

  <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Jeux prisés sur Player 2</Card.Title>
        <ListGroup >
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Cras justo odio</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
    </Card.Body>
  </Card>

  <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Actu Player 2</Card.Title>
      <Card.Text>
      Envie de nous affronter ? On t'attend !!!
      </Card.Text>
    </Card.Body>
  </Card>


  <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Comment ça marche ?</Card.Title>
      <Card.Text>
      C'est simple : tu cliques sur le gros bouton "Find your Player 2", tu ajoutes une plateforme, tu recherches un jeu et tu trouves ton Player 2 !
      </Card.Text>
    </Card.Body>
  </Card>


  <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Jeux populaires</Card.Title>
      <ListGroup>
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Cras justo odio</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card.Body>
  </Card>



  <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Notre philosophie</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </Card.Text>
    </Card.Body>
  </Card>


{/* Actualités du jeu vidéo */}

  <Card style={{ backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Actualité du jeu vidéo</Card.Title>
      <Card.Text>
        Liste d'actualités générée par le backend.
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>


</div>
);
}

export default ScreenHome