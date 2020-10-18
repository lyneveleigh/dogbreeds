import React from "react";

const DogFocus = (props) => {
  return (
    <div className="dog-cover">
      <img
        alt="dogs"
        src={`${process.env.PUBLIC_URL}/images/${props.id}.jpg`}
        height="250"
      />
      <div className="dog-detail">
        <h2> {props.breeds} </h2>

        <p> COAT: {props.coat} </p>
        <p> COLOUR: {props.colour} </p>

        <p> SIZE: {props.colour}</p>
        <p> CHARACTER: {props.character} </p>
        <div style={{ margin: "0 20% 00% 20%" }}>
          <p> FEATURES: {props.features}</p>
        </div>
        <a
          class="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray"
          onClick={() => {
            props.onClick("");
          }}
        >
          Back
        </a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default DogFocus;
