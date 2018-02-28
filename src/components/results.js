import React, { Component } from 'react';
import {
	ProgressBar
} from 'react-bootstrap';

class Results extends Component{
  constructor (props) {
    super(props);
    this.store =  this.props.store;
  }

voteJanasenaInPercent() {
  if (this.store.getState().janasena){
    return(this.store.getState().janasena / (this.store.getState().janasena + this.store.getState().tdp + this.store.getState().congress))* 100
  }else{
    return 0
  }
}

voteTdpInPercent() {
  if (this.store.getState().tdp){
    return(this.store.getState().tdp / (this.store.getState().janasena + this.store.getState().tdp + this.store.getState().congress))* 100
  }else{
    return 0
  }
}

voteCongressInPercent() {
  if (this.store.getState().congress){
    return(this.store.getState().congress / (this.store.getState().janasena + this.store.getState().tdp + this.store.getState().congress))* 100
  }else{
    return 0
  }
}

votesJanasenaInPercentStyle() {
  return {
    width: this.voteJanasenaInPercent()+'%'
  }
}

votesTdpInPercentStyle() {
  return {
    width: this.voteTdpInPercent()+'%'
  }
}

votesCongressInPercentStyle() {
  return {
    width: this.voteCongressInPercent()+'%'
  }
}

  render(){
    return(
      <div>
        <span className="label label-danger">Janasena : {this.voteJanasenaInPercent().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-danger" style={this.votesJanasenaInPercentStyle()}>
          </div>
        </div>
        <span className="label label-warning">Tdp : {this.voteTdpInPercent().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-warning" style={this.votesTdpInPercentStyle()}>
          </div>
        </div>
        <span className="label label-success">Congress : {this.voteCongressInPercent().toFixed(2) + '%'}</span>
        <div className="progress progress-striped active">
          <div className="progress-bar progress-bar-success" style={this.votesCongressInPercentStyle()}>
          </div>
        </div>
      </div>
    )
  }
}

export default Results;
