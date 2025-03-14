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
      "A third person tactical shooter from Epic, running on the Unreal Engine 3. Gears of War thrusts gamers into a deep and harrowing story of humankind's epic battle for survival against the Locust Horde, a nightmarish race of creatures that surface from the bowels of the planet.",
  },
  {
    image: "https://i.colnect.net/f/6362/085/Gears-of-War.jpg",
    title: "Gears of War",
    description:
      "A third person tactical shooter from Epic, running on the Unreal Engine 3. Gears of War thrusts gamers into a deep and harrowing story of humankind's epic battle for survival against the Locust Horde, a nightmarish race of creatures that surface from the bowels of the planet.",
  },
  {
    image: "https://i.colnect.net/f/6362/085/Gears-of-War.jpg",
    title: "Gears of War",
    description:
      "A third person tactical shooter from Epic, running on the Unreal Engine 3. Gears of War thrusts gamers into a deep and harrowing story of humankind's epic battle for survival against the Locust Horde, a nightmarish race of creatures that surface from the bowels of the planet.",
  },
  {
    image: "https://i.colnect.net/f/6362/085/Gears-of-War.jpg",
    title: "Gears of War",
    description:
      "A third person tactical shooter from Epic, running on the Unreal Engine 3. Gears of War thrusts gamers into a deep and harrowing story of humankind's epic battle for survival against the Locust Horde, a nightmarish race of creatures that surface from the bowels of the planet.",
  },
];

//create your first component
const Home = () => {
  return (
    <div className="homeClass">
      <Navbar />
      <div className="container p-5">
        <Jumbotron />
        <div className="row">
          {" "}
          {cards.map((item, index) => (
            <div className="col-3" key={index}>
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
