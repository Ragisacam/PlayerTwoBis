import React from 'react';
import '../App.css';
import { 
  Button,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
 } from 'reactstrap';
 import Modal from 'react-bootstrap/Modal'

<DIV>
    <Button onClick={() => route(modal à définir pour ajouter un jeu et trouver des joueurs)}>Find your player 2</Button>
    {/* un bouton centré (en forme de triangle/flèche) avec pour cible la page inscription jeu
route GET à positionner sur ce bouton */}
</DIV> 



<DIV>
{/* La big DIV pour se mettre en flexwrap ! */}


      <DIV> "Qui sommes nous ?" 
            {/* C'est une modal
            modèle trouvé ici : https://react-bootstrap.github.io/components/modal/ 
            Est-ce qu'on écrit quelque chose ou on met des liens vers nos homepage perso/profil linkedin ?
            */ }
      </DIV>


    <DIV>
        Jeux prisés sur P2
        <ListGroup>
          {/* C'est une liste générée par le backend au chargement de cette page (route '/homepage') */}
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
    </DIV>



    <DIV>
          Actu player Two 
          <ListGroup>
          {/* C'est une liste générée par le backend au chargement de cette page (route '/homepage') */}
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
    </DIV>

    <DIV>
          Comment ça marche ?
            <p>Champ texte</p>
    </DIV>
 
    <DIV>
          Jeux populaires
                {/* C'est une liste générée par le backend au chargement de cette page (route /homepage) */}
    </DIV>
{/* 
           /*  <!--     DIV "Notre philosophie" 
                Champ texte
            --> */

         /*    <!--     DIV actualité du jeu vidéo
                C'est une liste générée par le backend au chargement de cette page (route /homepage)
                On s'oriente vers une intégration de flux RSS ici (à confirmer ultérieurement)
            -->*/}

</DIV>
