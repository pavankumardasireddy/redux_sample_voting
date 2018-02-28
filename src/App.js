import React, { Component } from 'react';
import { voteJanasena, voteTdp, voteCongress} from './actions'
import Results from './components/results'
import './App.css';
import {
	Button,Jumbotron
} from 'react-bootstrap';

class App extends Component {
  constructor (props) {
    super(props);
    this.store =  this.props.store;
  }

  handleVoteJanasena = () => {
    this.store.dispatch(voteJanasena());
  }

  handleVoteTdp = () => {
    this.store.dispatch(voteTdp());
  }

  handleVoteCongress = () => {
    this.store.dispatch(voteCongress());
  }

  render() {
    return (
      <div class="container-fluid" style={{'textAlign':'center'}}>
        <Jumbotron >
          <img responsive src="1.png" alt="your vote counts" height="96" width="250"></img>
          <h2> Which party that may win in 2019 elections ? </h2>
          <h4> click on the below logos to pole your vote</h4>
        </Jumbotron>
        <div className="row">
          <div className="col-xs-offset-3 col-xs-2">
            <img src="js.png" height="96" alt="Janasena Party" onClick={this.handleVoteJanasena}></img>
          </div>
          <div className="col-xs-2">
            <img src="tdp.png" height="98" alt="Tdp Party" onClick={this.handleVoteTdp}></img>
          </div>
          <div className="col-xs-2">
            <img src="congress.jpg" height="94" alt="Congress Party" onClick={this.handleVoteCongress}></img>
          </div>
          </div>
      </div>

    );
  }
}

export default App;
