import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import DogFocus from "./DogFocus";
import { dogs } from "./dogs";
import history from './history';


class App extends Component {
  constructor() {
    super(); //have to go with this
    this.state = {
      dogs: dogs,
      searchfield: "",
      focus: "",
    };
  }

  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(Response=> {
    // 	console.log('object :>> ', object);
    // 	return Response.json();
    // })
    // .then( users => {this.setState({ dogs: users})
    // });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  onClick = (name) => {
    this.setState({ focus: name })
   history.push('/')


  };

  render() {
    const filteredDogs = this.state.dogs.filter((dogs) => {
      return dogs.breeds
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    if (this.state.focus === "") {
      return (
        <Router basename="/dogbreeds" history={history}>
          <div className="all">
            <br />
            <div className="tc">
              <h1 className="dog-title">
                Dog Breeds
                <i class="fas fa-paw"></i>
              </h1>
              <SearchBox searchChange={this.onSearchChange} />
              <CardList dogs={filteredDogs} onClick={this.onClick} />
            </div>
          </div>
        </Router>
      );
    } else {
      return (
        <Router basename="/dogbreeds" history={history}>
          <div className="all">
            <br />
            <div className="tc">
              <h1 className="dog-title">
                Dog Breed
                <i class="fas fa-paw"></i>
              </h1>
              <DogFocus
                key={this.state.focus}
                id={this.state.dogs[this.state.focus].id}
                breeds={this.state.dogs[this.state.focus].breeds}
                coat={this.state.dogs[this.state.focus].coat}
                size={this.state.dogs[this.state.focus].size}
                colour={this.state.dogs[this.state.focus].colour}
                character={this.state.dogs[this.state.focus].character}
                features={this.state.dogs[this.state.focus].features}
                onClick={this.onClick}
                dogs={filteredDogs}
              />
            </div>
          </div>
        </Router>
      );
    }
  }
}

export default App;
