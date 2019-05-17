import React, { Component } from 'react';
import { connect } from "react-redux";

import { updateSmurf } from '../../actions';
import Loader from 'react-loader-spinner';

class UpdateSmurf extends Component {
  state = {
    smurf: {
      id: this.props.clickedSmurf.id,
      name: this.props.clickedSmurf.name,
      age: this.props.clickedSmurf.age,
      height: this.props.clickedSmurf.height
    }
  }

  changeHandler = e => {
    e.preventDefault()

    this.setState({
      smurf: {
        ...this.state.smurf,
        [e.target.name]: e.target.value
      }
    })
  }

  submitHandler = e => {
    e.preventDefault();

    this.props.updateSmurf(this.state.smurf)
    .then(() => {
      this.props.history.push(`/smurf/${this.props.clickedSmurf.id}`)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' name='name' value={this.state.smurf.name} onChange={this.changeHandler} placeholder='name' required/>
          <input type='text' name='age' value={this.state.smurf.age} onChange={this.changeHandler} placeholder='age' required/>
          <input type='text' name='height' value={this.state.smurf.height} onChange={this.changeHandler} placeholder='height' required/>
          <button type='submit'>{this.props.updatingSmurf ? <Loader type="ThreeDots" color="black" height={5} width={5} /> : 'Submit'}</button>
        </form>
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  clickedSmurf: { ...state.clickedSmurf },
  updatingSmurf: state.updatingSmurf
});

export default connect( mapStateToProps , { updateSmurf } )(UpdateSmurf);
