import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Serie from "./Serie";

const Series = () => {
  
  const navigate = useNavigate();
  const [series, setSeries] = useState([
      {
          "backdrop_path": "/84XPpjGvxNyExjSuLQe0SzioErt.jpg",
          "first_air_date": "2008-01-20",
          "genre_ids": [
              18,
              80
          ],
          "id": 1396,
          "name": "Breaking Bad",
          "origin_country": [
              "US"
          ],
          "original_language": "en",
          "original_name": "Breaking Bad",
          "overview": "When Walter White, a New Mexico chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of only two years left to live. He becomes filled with a sense of fearlessness and an unrelenting desire to secure his family's financial future at any cost as he enters the dangerous world of drugs and crime.",
          "popularity": 314.535,
          "poster_path": "/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
          "vote_average": 8.9,
          "vote_count": 11829
      },
      {
          "backdrop_path": "/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg",
          "first_air_date": "2021-11-06",
          "genre_ids": [
              16,
              10765,
              10759,
              18
          ],
          "id": 94605,
          "name": "Arcane",
          "origin_country": [
              "US"
          ],
          "original_language": "en",
          "original_name": "Arcane",
          "overview": "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.",
          "popularity": 54.774,
          "poster_path": "/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
          "vote_average": 8.8,
          "vote_count": 3101
      },
      {
          "backdrop_path": "/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg",
          "first_air_date": "1999-10-20",
          "genre_ids": [
              10759,
              35,
              16
          ],
          "id": 37854,
          "name": "One Piece",
          "origin_country": [
              "JP"
          ],
          "original_language": "ja",
          "original_name": "ワンピース",
          "overview": "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
          "popularity": 98.279,
          "poster_path": "/dum1wnm6kJOUos0XJqjB8s2UWi9.jpg",
          "vote_average": 8.7,
          "vote_count": 3776
      },
      {
          "backdrop_path": "/uGy4DCmM33I7l86W7iCskNkvmLD.jpg",
          "first_air_date": "2013-12-02",
          "genre_ids": [
              16,
              35,
              10765,
              10759
          ],
          "id": 60625,
          "name": "Rick and Morty",
          "origin_country": [
              "US"
          ],
          "original_language": "en",
          "original_name": "Rick and Morty",
          "overview": "Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.",
          "popularity": 308.984,
          "poster_path": "/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg",
          "vote_average": 8.7,
          "vote_count": 8285
      },
      {
          "backdrop_path": "/2UG177tWHy7xRmMKWJHB7nAUmKd.jpg",
          "first_air_date": "2009-04-05",
          "genre_ids": [
              10759,
              16,
              10765
          ],
          "id": 31911,
          "name": "Fullmetal Alchemist: Brotherhood",
          "origin_country": [
              "JP"
          ],
          "original_language": "ja",
          "original_name": "鋼の錬金術師 FULLMETAL ALCHEMIST",
          "overview": "Edward and Alphonse Elric's reckless disregard for alchemy's fun­damental laws ripped half of Ed's limbs from his body and left Al's soul clinging to a cold suit of armor. To restore what was lost, the brothers scour a war-torn land for the Philosopher's Sto­ne, a fabled relic which grants the ability to perform alchemy in impossible ways.\n\nThe Elrics are not alone in their search; the corrupt State Military is also eager to harness the artifact's power. So too are the strange Homunculi and their shadowy creator. The mythical gem lures exotic alchemists from distant kingdoms, scarring some deeply enough to inspire murder. As the Elrics find their course altered by these enemies and allies, their purpose remains unchanged – and their bond unbreakable.",
          "popularity": 70.595,
          "poster_path": "/5ZFUEOULaVml7pQuXxhpR2SmVUw.jpg",
          "vote_average": 8.7,
          "vote_count": 1650
      },
      {
          "backdrop_path": "/uJ16DD1dj4CQLPNCWIoiOF3l8np.jpg",
          "first_air_date": "2023-01-15",
          "genre_ids": [
              18
          ],
          "id": 100088,
          "name": "The Last of Us",
          "origin_country": [
              "US"
          ],
          "original_language": "en",
          "original_name": "The Last of Us",
          "overview": "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
          "popularity": 262.754,
          "poster_path": "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
          "vote_average": 8.7,
          "vote_count": 3619
      },
      {
          "backdrop_path": "/70YdbMELM4b8x8VXjlubymb2bQ0.jpg",
          "first_air_date": "2017-03-19",
          "genre_ids": [
              18,
              10751
          ],
          "id": 70785,
          "name": "Anne with an E",
          "origin_country": [
              "CA"
          ],
          "original_language": "en",
          "original_name": "Anne with an E",
          "overview": "A coming-of-age story about an outsider who, against all odds and numerous challenges, fights for love and acceptance and for her place in the world. The series centers on a young orphaned girl in the late 1890’s, who, after an abusive childhood spent in orphanages and the homes of strangers, is mistakenly sent to live with an elderly woman and her aging brother. Over time, 13-year-old Anne will transform their lives and eventually the small town in which they live with her unique spirit, fierce intellect and brilliant imagination.",
          "popularity": 124.951,
          "poster_path": "/6P6tXhjT5tK3qOXzxF9OMLlG7iz.jpg",
          "vote_average": 8.7,
          "vote_count": 4278
      },
      {
          "backdrop_path": "/smSbK5cd8T9XHcxEUcems23BDEF.jpg",
          "first_air_date": "2016-12-02",
          "genre_ids": [
              18,
              10765,
              35
          ],
          "id": 67915,
          "name": "Goblin",
          "origin_country": [
              "KR"
          ],
          "original_language": "ko",
          "original_name": "쓸쓸하고 찬란하神-도깨비",
          "overview": "In his quest for a bride to break his immortal curse, a 939-year-old guardian of souls meets a grim reaper and a sprightly student with a tragic past.",
          "popularity": 63.847,
          "poster_path": "/t7aUi8jbsIUSCNqA1akAbKjBWjU.jpg",
          "vote_average": 8.7,
          "vote_count": 2478
      },
      {
          "backdrop_path": "/nTvM4mhqNlHIvUkI1gVnW6XP7GG.jpg",
          "first_air_date": "2019-04-06",
          "genre_ids": [
              16,
              10759,
              10765
          ],
          "id": 85937,
          "name": "Demon Slayer: Kimetsu no Yaiba",
          "origin_country": [
              "JP"
          ],
          "original_language": "ja",
          "original_name": "鬼滅の刃",
          "overview": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.",
          "popularity": 226.273,
          "poster_path": "/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
          "vote_average": 8.7,
          "vote_count": 5288
      },
      {
          "backdrop_path": "/6UH52Fmau8RPsMAbQbjwN3wJSCj.jpg",
          "first_air_date": "2021-03-25",
          "genre_ids": [
              16,
              10765,
              10759,
              18
          ],
          "id": 95557,
          "name": "Invincible",
          "origin_country": [
              "US"
          ],
          "original_language": "en",
          "original_name": "Invincible",
          "overview": "Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.",
          "popularity": 82.133,
          "poster_path": "/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg",
          "vote_average": 8.7,
          "vote_count": 3504
      },
      {
          "backdrop_path": "/kU98MbVVgi72wzceyrEbClZmMFe.jpg",
          "first_air_date": "2005-02-21",
          "genre_ids": [
              16,
              10759,
              10765
          ],
          "id": 246,
          "name": "Avatar: The Last Airbender",
          "origin_country": [
              "US"
          ],
          "original_language": "en",
          "original_name": "Avatar: The Last Airbender",
          "overview": "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.",
          "popularity": 71.509,
          "poster_path": "/cHFZA8Tlv03nKTGXhLOYOLtqoSm.jpg",
          "vote_average": 8.7,
          "vote_count": 3314
      },
      {
          "backdrop_path": "/3ILMlmC30QUnYkY3XEBOyJ82Dqu.jpg",
          "first_air_date": "2016-04-03",
          "genre_ids": [
              10759,
              16
          ],
          "id": 65930,
          "name": "My Hero Academia",
          "origin_country": [
              "JP"
          ],
          "original_language": "ja",
          "original_name": "僕のヒーローアカデミア",
          "overview": "In a world where eighty percent of the population has some kind of super-powered Quirk, Izuku was unlucky enough to be born completely normal. But that won't stop him from enrolling in a prestigious hero academy. Now, he'll get his first taste of brutal rivalry from other schools as he braves the cutthroat, no-holds-barred provisional license exam.",
          "popularity": 38.73,
          "poster_path": "/ivOLM47yJt90P19RH1NvJrAJz9F.jpg",
          "vote_average": 8.7,
          "vote_count": 4358
      },
      {
          "backdrop_path": "/cHyY5z4txdVyGtYMvBJhCqCcJso.jpg",
          "first_air_date": "2020-01-10",
          "genre_ids": [
              16,
              10765,
              18,
              10759,
              35
          ],
          "id": 92685,
          "name": "The Owl House",
          "origin_country": [
              "US"
          ],
          "original_language": "en",
          "original_name": "The Owl House",
          "overview": "An animated fantasy-comedy series that follows Luz, a self-assured teenage girl who accidentally stumbles upon a portal to a magical world where she befriends a rebellious witch, Eda, and an adorably tiny warrior, King. Despite not having magical abilities, Luz pursues her dream of becoming a witch by serving as Eda's apprentice at the Owl House and ultimately finds a new family in an unlikely setting.",
          "popularity": 141.825,
          "poster_path": "/zhdy3PcNVE15wj1wrxn45ARZBnx.jpg",
          "vote_average": 8.7,
          "vote_count": 1310
      },
      {
          "backdrop_path": "/pb8Z3Ef6CFjpm87hKW3DfdUge3J.jpg",
          "first_air_date": "2022-11-03",
          "genre_ids": [
              99
          ],
          "id": 213762,
          "name": "Be Eternal: Champions of America",
          "origin_country": [
              "AR"
          ],
          "original_language": "es",
          "original_name": "Sean eternos: Campeones de América",
          "overview": "This series takes an unprecedented closeup look at Lionel Messi and the Argentine team's battle to break a 28-year title drought in 2021's Copa América.",
          "popularity": 14.743,
          "poster_path": "/kBlqr507IV9bDKHLEFBtEtTfCw3.jpg",
          "vote_average": 8.7,
          "vote_count": 115
      },
      {
          "backdrop_path": "/44KA3Jl0TCzH1SPdGDT4vvbrFCe.jpg",
          "first_air_date": "2010-09-17",
          "genre_ids": [
              10759,
              16
          ],
          "id": 32315,
          "name": "Sym-Bionic Titan",
          "origin_country": [
              "US"
          ],
          "original_language": "en",
          "original_name": "Sym-Bionic Titan",
          "overview": "Sym-Bionic Titan is an American animated action science fiction television series created by Genndy Tartakovsky, Paul Rudish, and Bryan Andrews for Cartoon Network. The series focuses on a trio made up of the alien princess Ilana, the rebellious soldier Lance, and the robot Octus; the three are able to combine to create the titular Sym-Bionic Titan. A preview of the series was first shown at the 2009 San Diego Comic-Con International, and further details were revealed at Cartoon Network's 2010 Upfront. The series premiered on September 17, 2010, and ended on April 9, 2011. The series is rated TV-PG-V.\n\nCartoon Network initially ordered 20 episodes; Tartakovsky had hoped to expand on that, but the series was not renewed for another season, as the show \"did not have any toys connected to it.\" Although Sym-Bionic Titan has never been released on DVD, All 20 episodes are available on iTunes.\n\nOn October 7, 2012, reruns of Sym-Bionic Titan began airing on Adult Swim's Toonami block.",
          "popularity": 14.607,
          "poster_path": "/e1HgZg7ReDfS4UXDho7CTSRcGXr.jpg",
          "vote_average": 8.7,
          "vote_count": 120
      },
      {
          "backdrop_path": "/2vbE9ajftJ7dkqUAyxDS0WFILx8.jpg",
          "first_air_date": "2010-09-06",
          "genre_ids": [
              16,
              35
          ],
          "id": 31132,
          "name": "Regular Show",
          "origin_country": [
              "US"
          ],
          "original_language": "en",
          "original_name": "Regular Show",
          "overview": "Two bored groundskeepers, Mordecai (a six-foot-tall blue jay) and Rigby (a hyperactive raccoon) are best friends who spend their days trying to entertain themselves by any means necessary, much to the displeasure of their boss. Their everyday pursuits often lead to things spiraling out of control and into the surreal.",
          "popularity": 172.22,
          "poster_path": "/mS5SLxMYcKfUxA0utBSR5MOAWWr.jpg",
          "vote_average": 8.7,
          "vote_count": 1697
      },
      {
          "backdrop_path": "/5DUMPBSnHOZsbBv81GFXZXvDpo6.jpg",
          "first_air_date": "2022-10-12",
          "genre_ids": [
              16,
              10759,
              10765,
              35
          ],
          "id": 114410,
          "name": "Chainsaw Man",
          "origin_country": [
              "JP"
          ],
          "original_language": "ja",
          "original_name": "チェンソーマン",
          "overview": "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.",
          "popularity": 143.621,
          "poster_path": "/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
          "vote_average": 8.7,
          "vote_count": 1080
      },
      {
          "backdrop_path": "/dJ8yrSokdTMnhKJw06MllSfCegb.jpg",
          "first_air_date": "2019-01-12",
          "genre_ids": [
              16,
              35,
              18
          ],
          "id": 83121,
          "name": "Kaguya-sama: Love Is War",
          "origin_country": [
              "JP"
          ],
          "original_language": "ja",
          "original_name": "かぐや様は告らせたい～天才たちの恋愛頭脳戦～",
          "overview": "Considered a genius due to having the highest grades in the country, Miyuki Shirogane leads the prestigious Shuchiin Academy's student council as its president, working alongside the beautiful and wealthy vice president Kaguya Shinomiya. The two are often regarded as the perfect couple by students despite them not being in any sort of romantic relationship.",
          "popularity": 62.749,
          "poster_path": "/5khbC6AuNgnvnoDbjIMKCOhEtIc.jpg",
          "vote_average": 8.7,
          "vote_count": 617
      },
      {
          "backdrop_path": "/oDEPqQstDYUHUxzyHotV8yrnzGk.jpg",
          "first_air_date": "2015-11-06",
          "genre_ids": [
              35
          ],
          "id": 64010,
          "name": "Reply 1988",
          "origin_country": [
              "KR"
          ],
          "original_language": "ko",
          "original_name": "응답하라 1988",
          "overview": "A nostalgic trip back to the late 1980s through the lives of five families and their five teenage kids living in a small neighborhood in Seoul.",
          "popularity": 23.598,
          "poster_path": "/mqhYVbe20pB0PQXVZVdtbMakOCF.jpg",
          "vote_average": 8.7,
          "vote_count": 100
      },
      {
          "backdrop_path": "/nBZyWSGAUEzCH7Mna0zUNTpBQlQ.jpg",
          "first_air_date": "2022-06-18",
          "genre_ids": [
              18,
              10759,
              9648,
              10765
          ],
          "id": 135157,
          "name": "Alchemy of Souls",
          "origin_country": [
              "KR"
          ],
          "original_language": "ko",
          "original_name": "환혼",
          "overview": "A powerful sorceress in a blind woman's body encounters a man from a prestigious family, who wants her help to change his destiny.",
          "popularity": 102.308,
          "poster_path": "/q2IiPRSXPOZ6qVRj36WRAYEQyHs.jpg",
          "vote_average": 8.7,
          "vote_count": 361
      }
  ]
  );


  const fetchMovies = () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGVhMTZjNjkyZDU2NWVkNTlmODk3NDBiOTQyMjQ1NyIsInN1YiI6IjY0NmJkZDYwNTRhMDk4MDE1NWUyZjRiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hkvWfebO8WW7zOhYZOXjr9DS37EyXjsOBGM7t-ebgNk",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        const { results } = response;
        setSeries(results);
        console.log(results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    //fetchMovies();
  }, []);

  return (
    <div className="moviesCardsContainer">
      {series.map((serie, index) => {
        return <Serie serie={serie} key={serie.id} />;
      })}
    </div>

  );
};

export default Series;
