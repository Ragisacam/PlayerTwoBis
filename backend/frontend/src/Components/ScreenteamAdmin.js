import React from 'react';

function ScreenteamAdmin() {
  return (
          <h1>ScreenteamAdmin</h1>
    );
}

export default ScreenteamAdmin;

// div Title
  // avatarTeam
  // teamName
// div Title

// cards
  // game
    //gameList from back
      // avatar + title
      //fetch get
    //button addTeamGame
        //modal = copie de  ScreenGame (inscription - jeux dans Figma)
        // button X (close)
          // close modal
        // button validate
          // close modal
          // save

  //candidature

    // button search (user)
      // modal
        //input text
          // fetch post
        // result search
          // fetch get
        //button save
          //fetch post
          // close modal
        // button X (close)
          // close modal


  //Description
    //button setting
      //modal
        // input text
          // fetch post
        // button X (close)
          // close modal
        // button validate
          // close modal
          // save

  //Philosophie
    //button setting
      //modal
        // input text
        //button validate
          // fetch post
          // close modal
        // button X (close)
          // close modal
    
  //Profil recherché
    //button setting
      //modal = copie de  ScreenWish (inscription - souhait dans Figma)
          // fetch post
        //button validate
          // close modal
          // save
        // button X (close)
          // close modal

  //teamActu
    //teamActuList from back
      //fetch get
    // button addTeamActu
      //modal
        //input text "title"
        //input text "content"
        // Button /saveTeamActu
          // fetch post
           // close modal
        // button X (close)
          // close modal

  // Members
    // admin
      //adminList from back
        // fetch get
      // admincount
        //count from back
          //fetch get
      // button addAdmin
        //modal
          //input text
            // fetch post (dans memberList)
          //result
            //fetch get
          // button addAdminAtTeam
            //save 
            // close Modal
          // button X (close)
          // close modal

    // sousAdmin
        //sousAdminList from back
          // fetch get
      // sousAdminCount
        //count from back
          //fetch get
      // button addSousAdmin
        //modal
          //input text
            // fetch post (dans memberList)
          //result
            //fetch get
          // button addSousAdminAtTeam
            //save 
            // close Modal
          // button X (close)
          // close modal
      // button deleteSousAdmin
        // fetch delete
    
    // Regular
        //Regularlist from back
          // fetch get
      // RegularCount
        //count from back
          //fetch get
      // button addRegular
        //modal
          //input text
            // fetch post (dans memberList)
          //result
            //fetch get
          // button addRegularAtTeam
            //save 
            // close Modal
          // button X (close)
          // close modal
        // button deleteRegular
        // fetch delete


// cards