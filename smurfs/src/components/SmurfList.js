import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner';

import { getClickedSmurf, getSmurfs } from '../actions';


class SmurfList extends Component {
  state = {
    clickedSmurf: null
  }

  clickHandler = smurf => {
    this.props.getClickedSmurf(smurf)
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    console.log(this.props)
    if(this.props.fetchingSmurfs) {
      return <Loader type="Rings" color="#00BFFF" height="120" width="120" />
    } else {
      return (
        <div>
          <div>
            {this.props.smurfs.map(smurf => {
              return (
                <div key={smurf.id}>
                  <Link to={`/smurf/${smurf.id}`} ><h1 onClick={() => this.clickHandler(smurf)}>{smurf.name}</h1></Link>
                  <h4>Age: {smurf.age}</h4>
                  <h4>{smurf.height}</h4>
                </div>
              )
              })}
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  error: state.error
});

export default connect( mapStateToProps, { getClickedSmurf, getSmurfs } )(SmurfList);
