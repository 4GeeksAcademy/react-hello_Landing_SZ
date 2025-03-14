import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <h1 className="jumboTitle font-weight-bold text-uppercase">Do you wanna play a Game?</h1>
            <p className="lead">This a game library from players to players, enjoy with our catalog</p>
            <hr className="my-4" />
            <p>Choose the game and gather more info</p>
            <p className="lead">
                <a className="btn btn-warning btn-lg" href="#" role="button">Let's Play</a>
            </p>
        </div >
    );
};

export default Jumbotron;
