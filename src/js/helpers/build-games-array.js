const buildGamesArray = function(data) {
    let xmlDoc;
    if (window.DOMParser) {
        let parser = new DOMParser();
        xmlDoc = parser.parseFromString(data,"text/xml");
    }
    else {
        xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = false;
        xmlDoc.loadXML(data);
    }

    let gamesArray = [];
    let games = xmlDoc.getElementsByTagName('gms')[0].getElementsByTagName('g');

    for (let x = 0; x < games.length; x++) {
        let game = games[x];

        gamesArray.push({
            id: games[x].attributes['eid'].nodeValue,
            home: {
                abbr: game.attributes['h'].nodeValue,
                name: game.attributes['hnn'].nodeValue,
                score: game.attributes['hs'].nodeValue
            },
            away: {
                abbr: game.attributes['v'].nodeValue,
                name: game.attributes['vnn'].nodeValue,
                score: game.attributes['vs'].nodeValue
            }
        });
    };

    return gamesArray;
}

export default buildGamesArray;
