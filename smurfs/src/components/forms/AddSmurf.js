import React, { Component } from 'react';
import { connect } from "react-redux";

import { addSmurf } from '../../actions';
import Loader from 'react-loader-spinner';

class AddSmurf extends Component {
  state = {
    smurf: {
      name: '',
      age: '',
      height: ''
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

    this.props.addSmurf(this.state.smurf)
    .then(() => {
      this.props.history.push('/')
    })
    this.setState({
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' name='name' value={this.state.smurf.name} onChange={this.changeHandler} placeholder='name' required/>
          <input type='text' name='age' value={this.state.smurf.age} onChange={this.changeHandler} placeholder='age' required/>
          <input type='text' name='height' value={this.state.smurf.height} onChange={this.changeHandler} placeholder='height' required/>
          <button type='submit'>{this.props.addingSmurf ? <Loader type="ThreeDots" color="black" height={7} width={7} /> : 'Submit'}</button>
        </form>
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addingSmurf: state.addingSmurf,
  error: state.error
});

export default connect( mapStateToProps , { addSmurf } )(AddSmurf);
