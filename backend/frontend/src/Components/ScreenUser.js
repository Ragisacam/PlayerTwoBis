import React from 'react';
import {Button, Col, Row, Card, CardTitle, CardText,CardSubtitle, CardBody, CardGroup, CardImg} from 'reactstrap';
import babyYoda from '../images/icons8-baby-yoda-48.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function ScreenUser() {
  
  return (
<div className="backgroundColor">
    <Card className="backgroundColor">
        <CardBody className="card-background">
          <Row>
            <Col>
              <img width="10%" src={babyYoda} alt="userAvatar" />
            </Col>
            <Col>
              <CardTitle>Mon profil</CardTitle>
              <CardSubtitle>Team : <Button>Rejoindre</Button>  <Button>Créer</Button>  </CardSubtitle> {/* ici, il faudra insérer un tableau avec en header Team : Rejoindre : Créer:  */}
            </Col>
          </Row>
          <div>
              <CardSubtitle>Description</CardSubtitle>
              <CardText>Sic de isto et tutius perducit ad actum ipsum, ut si dico “Ego autem vadam lavari, ut mens mea in statu naturae</CardText>
          </div> 
        </CardBody>
    </Card>

    <Card className="backgroundColor">
        <CardTitle>Mes Player Two</CardTitle>
        <CardGroup>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      <Card>
      <CardBody>
        <Row>
        <img height="3%" width="10%" src={require("../images/Ellipse 4.png")} alt="avateur P2" />
          <Col>
          <CardTitle>Pseudo P2</CardTitle>
          <CardTitle>Identifiant</CardTitle>
          </Col>
          <img height="3%" width="3%" src={require("../images/Ellipse 6.png")} alt="Online/offline" />
          </Row>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button>Supprimer</Button>
        </CardBody>
      </Card>
    </CardGroup> 
    </Card>

</div>

      
/* <CardBody>
Image de l'avatar (chargé par le backend)
Nom de l'utilisateur (chargé par le backend)
Team (affiché par le backend uniquement si l'utilisateur est dans une ou plusieurs teams)
"Description" (format sous-titre ?)
Champ texte (chargé par le backend)
</CardBody> */

  );
};


{/* question pour Quentin : 4 DIV à la suite ou séparation sur 2 colonnes de la page ? */}



{/* <DIV>

Title : "Mes Player Two"

Une liste de Player 2 sous forme de Card à l'identique de la match page ((avec en plus un bouton vert si online, rouge si offline, si on a le temps d'intégrer les web sockets)

</DIV> */}


{/* <DIV>
Champ texte : Liste de mes jeux

Tableau sur 3 colonnes avec en header :

plateforme
jeux
Image

liste fournie par le backend au chargement de la page

Possibilité de trier par ordre alphabétique sur les champs plateformes et jeux

</DIV> */}


{/* <DIV>
Champ texte : "Mon fil d'actualité"
Liste de flux d'actualité chargé par le backend
</DIV> */}



export default ScreenUser;