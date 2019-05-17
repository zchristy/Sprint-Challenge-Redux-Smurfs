import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import { deleteSmurf } from '../actions'

class Smurf extends Component {

  goBack = () => {
    this.props.history.goBack()
  }

  deleteHandler = e => {
    e.preventDefault();

    this.props.deleteSmurf(this.props.clickedSmurf.id)
    .then(() => {
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <div>
        <h1>{this.props.clickedSmurf.name}</h1>
        <h4>{this.props.clickedSmurf.age}</h4>
        <h4>{this.props.clickedSmurf.height}</h4>
        <Link to='/update-smurf' ><button>Update</button></Link>
        <button onClick={this.deleteHandler}>
          {this.props.deletingSmurf ? <Loader type="ThreeDots" color="black" height={7} width={7} /> : 'Delete'}
        </button>
        <h4 onClick={this.goBack}>Go Back</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clickedSmurf: { ...state.clickedSmurf },
  deletingSmurf: state.deletingSmurf
});

export default connect( mapStateToProps, { deleteSmurf } )(Smurf);
