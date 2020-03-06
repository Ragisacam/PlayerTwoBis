const axios = require('axios').default;

const API_KEY = "d03577227c5216baadca7ff98c147128";

const header = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'user-key': API_KEY,
  }
}

async function getGamesWithID(gameID) {
  const config = header;
  config.data = `
    games "${gameID}";
    fields "cover";
  `;

  try {
    const response = await axios("https://api-v3.igdb.com/games", config);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getGamesWithID("26183");


// TODO export