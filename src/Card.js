import React from "react";
import { dogs } from "./dogs";
import './dog.css';

const Card = (props) => {
  return (
	 
    // <div className="dog-background">
	<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow=10">  
      {/* <img alt ='robots' src={`https://robohash.org/${props.id}?200x200`} /> */}
      <img alt="dogs" src={`images/${props.id}.jpg`} height="200" />
      <div>
        <h2> {props.breeds} </h2>
        <p className='dog-info'> {props.info} </p>
			
        <button
          onClick={() => {
            props.onClick(props.id - 1);
          }}
        >
          Click here
        </button>
      </div>
    </div>
  );
};

export default Card;