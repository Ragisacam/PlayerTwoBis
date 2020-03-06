const axios = require('axios').default;

const API_KEY = "d03577227c5216baadca7ff98c147128";

const header = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'user-key': API_KEY,
  }
}

async function getGames(gameName) {
  const config = header;
  config.data = `
    search "${gameName}";
    fields name,genres,cover,rating,url,cover.url,websites.url;
  `;

  try {
    const response = await axios("https://api-v3.igdb.com/games", config);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getGames("battlefield");


// TODO export 