import React from "react";

const DogFocus = (props) => {
  //   console.log("props :>> ", props);
  return (
    <div className="dog-cover">
      {/* <div className="bg-light-green dib br3 pa3 ma2 bw2 shadow=5"> */}
      {/* <img alt ='robots' src={`https://robohash.org/${props.id}?200x200`} /> */}
      <img alt="dogs" src={`images/${props.id}.jpg`} height="250" />
      <div className="dog-detail">
        <h2> {props.breeds} </h2>

        <p> COAT: {props.coat} </p>
        <p> COLOUR: {props.colour} </p>

        <p> SIZE: {props.colour}</p>
        <p> CHARACTER: {props.character} </p>
        <div style={{margin: '0 20% 00% 20%'}}>
        <p> FEATURES: {' '}
           {props.features} 
        </p>
</div>
        <a
          class="f6 link dim ph3 pv2 mb2 dib white bg-mid-gray"
          href="#0"
          onClick={() => {
            props.onClick("");
          }}
        >
          Back
        </a>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default DogFocus;
