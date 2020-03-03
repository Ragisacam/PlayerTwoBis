import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header'
import { 
  Button,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  Modal
   } from 'react-bootstrap'  ; 



 function ScreenHome() {
  return (
      <div>
      <Header/>
<div>
      <Link to="/ScreenMatchPage">
            Find your player 2
            {/* un bouton centré (en forme de triangle/flèche) avec pour cible la page inscription jeu
            route GET à positionner sur ce bouton */}
      </Link> 



<div>
{/* La big DIV pour se mettre en flexwrap ! */}


      <div> "Qui sommes nous ?" 
            {/* C'est une modal
            modèle trouvé ici : https://react-bootstrap.github.io/components/modal/ 
            Est-ce qu'on écrit quelque chose ou on met des liens vers nos homepage perso/profil linkedin ?
            */ }
      </div>


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

    <div>
          Comment ça marche ?
          <p>Champ texte</p>
    </div>
 
    <div>
          Jeux populaires
                {/* C'est une liste générée par le backend au chargement de cette page (route /homepage) */}
    </div>

    <div>
          Notre philosophie
          <p>Champ texte</p>
    </div>

    <div>Actualité du jeu vidéo
                {/* C'est une liste générée par le backend au chargement de cette page (route /homepage)
                On s'oriente vers une intégration de flux RSS ici (à confirmer ultérieurement)
            -->*/}
    </div>
</div>
</div>
</div>
);
}

export default ScreenHome