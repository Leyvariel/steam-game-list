console.log('hello world');

import SteamAPI from 'steamapi';

const steam = new SteamAPI('11E6383E7C15FF83053679EB20274475');

const userId = await steam.resolve('https://steamcommunity.com/id/Duzevert');
console.log(userId);

steam.getUserOwnedGames(userId).then(summary => {
    console.log(summary);
   });