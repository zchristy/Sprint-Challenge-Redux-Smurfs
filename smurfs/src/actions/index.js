import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res)
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: [...res.data] });
    })
    .catch(err => {
      dispatch({
        type: FETCH_SMURFS_FAILURE,
        payload: `${err}`
      });
    });
};

export const CLICKED_SMURF = 'CLICKED_SMURF';

export const getClickedSmurf = smurf => {
  return {
    type: CLICKED_SMURF,
    payload: smurf
  }
};

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  return axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ type: ADD_SMURF_SUCCESS, payload: [...res.data] });
    })
    .catch(err => {
      dispatch({
        type: ADD_SMURF_FAILURE,
        payload: `${err}`
      });
    });
};

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START';
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS';
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE';
export const UPDATE_SMURF_END = 'UPDATE_SMURF_END';

export const updateSmurf = smurf => dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
  return axios
    .put(`http://localhost:3333/smurfs/${smurf.id}`, smurf)
    .then(res => {
      dispatch({ type: UPDATE_SMURF_SUCCESS, payload: [...res.data] });
    })
    .catch(err => {
      dispatch({
        type: UPDATE_SMURF_FAILURE,
        payload: `${err}`
      });
    })
    .then(
      dispatch({
        type: UPDATE_SMURF_END, payload: smurf
      })
    );
};

export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const deleteSmurf = id => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  return axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ type: DELETE_SMURF_SUCCESS, payload: [...res.data] });
    })
    .catch(err => {
      dispatch({
        type: DELETE_SMURF_FAILURE,
        payload: `${err}`
      });
    });
};
