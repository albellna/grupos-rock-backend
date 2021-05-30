const express = require("express");
const mongoose = require("mongoose");
const app = express();

grupos = [
    {
      id: 1,
      name: 'Rolling Stones',
      anyosActivos: '1962-presente',
      miembros: 'Mick Jagger, Keith Richards, Charlie Watts, Ronnie Wood',
      descripcion: 'The Rolling Stones es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian Stewart.'
    },
    {
      id: 2,
      name: 'Led Zeppelin',
      anyosActivos: '1968-1980',
      miembros: 'Jimmy Page, Robert Plant, John Paul Jones, John Bonham',
      descripcion: 'Led Zeppelin fue un grupo británico de hard rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds. La banda estuvo integrada por John Paul Jones como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería (que había coincidido con Plant en The Band of Joy).'
    },
    {
      id: 3,
      name: 'Queen',
      anyosActivos: '1970-presente',
      miembros: 'Freddie Mercury, John Deacon, Brian May, Roger Taylor',
      descripcion: 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante y pianista Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, Brian May y Roger Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.'
    },
    {
      id: 4,
      name: 'Pink Floyd',
      anyosActivos: '1965-1995',
      miembros: 'David Gilmour, Nick Mason, Richard Wright',
      descripcion: 'Pink Floyd fue una banda de rock británica, fundada en Londres en 1965. Es considerada un ícono cultural del siglo XX y una de las bandas más influyentes y aclamadas en la historia de la música, obtuvieron gran popularidad gracias a su música psicodélica que evolucionó hacia el rock progresivo y rock sinfónico con el paso del tiempo.'
    },
    {
      id: 5,
      name: 'Deep Purple',
      anyosActivos: '1968-presente',
      miembros: 'Ian Paice, Ian Gillan, Roger Glover, Steve Morse, Don Airey',
      descripcion: 'Deep Purple es una banda británica de hard rock formada en 1968 en Hertford, Reino Unido. Está considerada como una de las pioneras de dicho subgénero, y los pioneros del heavy metal junto a Led Zeppelin y Black Sabbath.'
    },
    {
      id: 6,
      name: 'AC/DC',
      anyosActivos: '1973-presente',
      miembros: 'Angus Young, Stevie Young, Brian Johnson, Cliff Williams, Phil Rudd',
      descripcion: 'AC/DC es una banda de hard rock británica-australiana, formada en 1973 en Australia por los hermanos escoceses Malcolm y Angus Young.'
    },
    {
      id: 7,
      name: 'The Ramones',
      anyosActivos: '1974-1996',
      miembros: 'Joey Ramone, Johnny Ramone, Marky Ramone, Elvis Ramone, C. J. Ramone, Dee Dee Ramone, Tommy Ramone, Richie Ramone',
      descripcion: 'Ramones fue una banda de punk formada en Forest Hills, en el distrito de Queens (Nueva York, Estados Unidos) en 1974, y disuelta veintidós años más tarde, en 1996. Pioneros y líderes del naciente punk,​ cimentaron las bases de este género musical con composiciones simples, minimalistas, repetitivas y letras muy simples o incluso sin sentido, en clara oposición a la pomposidad y la fastuosidad de las bandas que triunfaban en el mercado de los años 1970: con sus largos solos de guitarra, las complejas canciones de rock progresivo y sus enigmáticas letras.'
    },
    {
      id: 8,
      name: 'Kiss',
      anyosActivos: '1973-actualidad',
      miembros: 'Paul Stanley, Gene Simmons, Eric Singer, Tommy Thayer',
      descripcion: 'Kiss (estilizado KISS) es una banda estadounidense de rock formada en Nueva York en enero de 1973 por el bajista Gene Simmons y el guitarrista Paul Stanley, a los que más tarde se unirían el batería Peter Criss y el guitarrista Ace Frehley. Conocidos por su maquillaje facial y sus extravagantes trajes, el grupo se dio a conocer al público a mediados de los años 1970 gracias a sus actuaciones en directo, en las que incluían pirotecnia, llamaradas, cañones, baterías elevadoras, guitarras con humo y sangre falsa.'
    }
  ]

  app.use(express.json());

app.get("/",(req, res) => {
    res.send(grupos);
});

app.post("/crear-grupo", (req, res) => {
     
});

mongoose.connect("mongodb+srv://albellna:REp5bMAy8PBHd91n@clustergruposrock.eomtc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (req, res) => {

});

app.listen(3000, () =>{
    console.log("Listening to 3000");
});