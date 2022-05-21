import React from "react";
import "./Card.css"

const Card = (props) => {
  return ( 
  <div className={`Main_div ${props.bgcolor}`}>
      <div className="div1">
        <div className="date">{props.date}</div>
        <div>{props.icon}</div>
      </div>
     
      <p className="title">{props.title}</p>
      <p className="CompTitle">{props.CompTitle}</p>
      <p className="CompTitle">{props.ComTitle}</p>

      <div className="desk">
      <div className="desktop">{props.mode}</div>
     <div> <i className="fa-solid fa-arrow-right-long fa-3x"></i></div>
      </div>
     
    </div>
  );
};

export default Card;
