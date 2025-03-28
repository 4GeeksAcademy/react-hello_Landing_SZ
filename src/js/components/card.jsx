import React from "react";

const Card = (props) => {
  const { image, title, description, url } = props.cards;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={url} target="_blank" className="btn btn-primary">
          More Info
        </a>
      </div>
    </div>
  );
};

export default Card;
