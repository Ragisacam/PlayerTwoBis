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
          style={{borderRadius: "0px 50px", boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)", borderadius: '50px'}}
                  >
          <Modal.Header style={{backgroundColor: '#010212', borderadius: '50px'}}>
            <Modal.Title id="contained-modal-title-vcenter" style={{color: 'white', backgroundColor: '#010212', borderadius: '0px 50px'}}> 
            Qui sommes-nous ?
            </Modal.Title>
            <Button style={{color: 'white', backgroundColor: '#010212', justifyContent: 'right', border: 0,}} onClick={props.onHide}> <img src={require('../images/cross_modal.svg')} alt="modal cross"/></Button>
          </Modal.Header>
          <Modal.Body style={{color: 'white', backgroundColor: '#010212'}}>

            <h4>Player Two</h4>
            <p>En 2020, nous avons créé Player Two à destination des Gamers. Nous pensions qu’il fallait répondre à une vraie demande venant de tous ces Gamers et Gameuses qui cherchent leur Player Two.</p>
            <p>Ensuite, il a été nécessaire d’apporter une réponse personnalisée à toutes les demandes que nous recevions. Nous avons donc mis en place notre système de matching afin de trouver le joueur qui vous correspond.</p>
            <h5>Notre objectif ?</h5>
            <p>Vous permettre de trouver le joueur qui correspond à vos attentes.</p>
            <h5>Nos points forts ?</h5>
            <li>Notre réactivité : réponse sous 24h</li>
            <li>Entreprise à taille humaine</li>
            <li>La qualité de notre système de Matching</li>
            <p></p>
            <h5>Notre rêve ?</h5>
            <p>Que chaque joueur de France ait le « réflexe Player Two » pour jouer, rencontrer, chatter… bref, faire vivre son expérience de jeu.</p>
            <p>Finalement, chaque entreprise est comme une boule de neige. Depuis 2020 Playertwo.fr a tracé une jolie route. Et ce n’est pas fini…</p>

          </Modal.Body>
          <Modal.Footer style={{color: 'white', backgroundColor: '#010212'}}>
          </Modal.Footer>
        </Modal>
      );
    }

 function ScreenHome() {
      const [modalShow, setModalShow] = React.useState(false);

  return (
<div className="backgroundColor">
      
  <div>
        <FormGroup className="nextButton boldFont" style={{margin:0, paddingTop:25, justifyContent:"center"}}>
        <Link to="screenidentity">
                <img style={{height:"180px", width:"200px",}}  src={require('../images/button.svg')} alt="button start"/>
                <div style={{paddingBottom:"20px",paddingLeft:"20px", fontSize:"14px"}} className="textButton">Find your Player Two</div>
              </Link>
        </FormGroup>
  </div>

<CardColumns style={{paddingTop:25}}>

 {/*  Modal qui sommes-nous ? */}
  <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)", backgroundColor: '#010212', borderRadius: "0px 50px" }}>
  <Card.Body>
      <Card.Title onClick={() => setModalShow(true)}><Link>Qui sommes-nous ?</Link></Card.Title>
      </Card.Body>


      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
  </Card>

  <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)", backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Jeux prisés sur Player 2</Card.Title>
      <br></br>
        <ListGroup >
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Team Fortress 2 <img height="3%" width="10%" align= "right" src={require("../images/Teamfortress2.jpg")} alt="Team Fortress 2"></img> </ListGroup.Item> 
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Counter-Strike: Global Offensive <img height="3%" width="10%" align= "right" src={require("../images/csgo.jpg")} alt="Counter-Strike: Global Offensive"></img> </ListGroup.Item> 
            <ListGroup.Item style={{backgroundColor: '#010212'}}>PLAYERUNKNOWN'S BATTLEGROUNDS <img height="3%" width="10%" align= "right" src={require("../images/PUBG.jpg")} alt="PLAYERUNKNOWN'S BATTLEGROUNDS"></img> </ListGroup.Item> 
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Unturned <img height="3%" width="10%" align= "right" src={require("../images/Unturned.jpg")} alt="Unturned"></img> </ListGroup.Item> 
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Garry's Mod <img height="3%" width="10%" align= "right" src={require("../images/Garrys.png")} alt="Garry's Mod"></img> </ListGroup.Item> 
        </ListGroup>
    </Card.Body>
  </Card>


  <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)", backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Comment ça marche ?</Card.Title>
      <Card.Text style={{font: 'comfortaa'}}>
      C'est simple : Tu cliques sur le gros bouton "Find your Player 2", tu ajoutes une plateforme, tu cherches un jeu et tu trouves ton Player 2 !
      </Card.Text>
    </Card.Body>
  </Card>


  <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)", backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Jeux populaires</Card.Title>
      <br></br>
      <ListGroup>
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Pokémon Épée / Bouclier <img height="3%" width="10%" align= "right" src={require("../images/Pokémon.png")} alt="Pokémon Épée / Bouclier"></img> </ListGroup.Item> 
            <br></br>
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Call of Duty Modern Warfare <img height="3%" width="10%" align= "right" src={require("../images/Call.png")} alt="Call of Duty Modern Warfare"></img> </ListGroup.Item> 
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Crash Team Racing Nitro-Fueled <img height="3%" width="10%" align= "right" src={require("../images/CTR.jpg")} alt="Crash Team Racing Nitro-Fueled"></img> </ListGroup.Item> 
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Borderlands 3 : Le Casse du Beau Jackpot <img height="3%" width="10%" align= "right" src={require("../images/Borderlands.jpg")} alt="Borderlands 3 : Le Casse du Beau Jackpot"></img> </ListGroup.Item> 
            <ListGroup.Item style={{backgroundColor: '#010212'}}>Black Mesa <img height="3%" width="10%" align= "right" src={require("../images/black.jpg")} alt="Black Mesa"></img> </ListGroup.Item> 
      </ListGroup>
    </Card.Body>
  </Card>



  <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)", backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Notre philosophie</Card.Title>
      <Card.Text> 
        Rassembler les Gamers afin de ne plus jouer seul !
      </Card.Text>
    </Card.Body>
  </Card>


{/* Actualités du jeu vidéo */}

  <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)", backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Actualité du jeu vidéo</Card.Title>
      <br></br>
      <Card.Text>
        <h6> Pour sa sortie sur les plateformes modernes, DOOM 64 s'est offert un chapitre inédit </h6>
        <p> Non content d'être offert pour toute précommande de DOOM Eternal, le portage de DOOM 64 attendu le 20 mars sur PS4, Xbox One, Switch et PC sera doté d'un chapitre inédit développé pour l'occasion par Nightdive Studios, apprend-on de la bouche des développeurs sur le site USgamer.</p>
        <p> N'étant jamais sorti ailleurs que sur Nintendo 64 depuis 1997, DOOM 64 aurait pu se contenter d'un portage sec et faire quand même office de vraie curiosité pour de nombreux joueurs n'ayant jamais connu cet épisode conçu par Midway comme une suite aux événements de DOOM 2. Mais Nightdive Studios, déjà habitué à plonger dans le catalogue Nintendo 64 avec ses restaurations de Turok et Turok 2, a offert au jeu un contenu inédit plutôt inattendu. Il faut dire qu'il y a une authentique passion pour DOOM 64 chez Nightdive, dont le moteur maison KEX est né d'un portage PC très officieux réalisé par Samuel Villareal, aujourd'hui responsable du moteur chez Nightdive.</p>
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ boxShadow:"0px 4px 4px rgba(144, 14, 205, 0.8)", backgroundColor: '#010212', borderRadius: "0px 50px" }}>
    <Card.Body>
      <Card.Title>Actu Player 2</Card.Title>
      <Card.Text>
      <h5>Envie de nous affronter ? On t'attend !!!</h5>
      </Card.Text>
    </Card.Body>
  </Card>

</CardColumns>


</div>
);
}

export default ScreenHome