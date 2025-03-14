import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import Footer from "./footer";
import Jumbotron from "./jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const cards = [
  {
    image: "https://i.colnect.net/f/6362/085/Gears-of-War.jpg",
    title: "Gears of War",
    description:
      "A third person tactical shooter from Epic, running on the Unreal Engine 3.",
    url: "https://colnect.com/en/video_games/video_game/8527-Gears_of_War-Xbox_360-United_States_of_America",
  },
  {
    image: "https://i.colnect.net/b/6374/706/POD-Planet-of-Death.jpg",
    title: "POD: Planet of Death",
    description:
      "POD: Planet of Death is a Futuristic Racing by Ubisoft in 1997. ",
    url: "https://colnect.com/en/video_games/video_game/41095-POD_Planet_of_Death-PC_Microsoft_Windows-France",
  },
  {
    image: "https://i.colnect.net/b/6362/173/Carmageddon.jpg",
    title: "Carmageddon",
    description:
      "Take the wheel as Max Damage as you plow scores of vehicles unlucky enough to be in your way. ",
    url: "https://colnect.com/en/video_games/video_game/8746-Carmageddon-PC_Microsoft_Windows-Worldwide",
  },
  {
    image: "https://i.colnect.net/b/6361/638/Warcraft-Orcs--amp--Humans.jpg",
    title: "Warcraft: Orcs & Humans",
    description:
      "Warcraft: Orcs & Humans is the first strategy game from Warcraft series developed by Blizzard Entertainment.",
    url: "https://colnect.com/en/video_games/video_game/7310-Warcraft_Orcs_Humans-MAC-United_States_of_America",
  },
];

//create your first component
const Home = () => {
  return (
    <div className="homeClass">
      <Navbar />
      <div className="container p-5">
        <Jumbotron />
        <div className="row p-2 mt-3">
          {cards.map((item, index) => (
            <div className="col-3 text-center" key={index}>
              <Card cards={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
