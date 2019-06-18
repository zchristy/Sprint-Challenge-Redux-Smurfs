import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  CLICKED_SMURF,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE,
  UPDATE_SMURF_END,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from '../actions';

const initialState = {
  smurfs: [],
  clickedSmurf: null,
  fetchingSmurfs: false,
  fetchingClickedSmurf: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ''
      }
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case CLICKED_SMURF:
      return {
        ...state,
        clickedSmurf: action.payload,
        error: ''
      }
    case ADD_SMURF_START:
      return {
        ...state,
        addingSmurf: true,
        error: ''
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error: ''
      }
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    case UPDATE_SMURF_START:
      return {
        ...state,
        updatingSmurf: true,
        error: ''
      }
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        updatingSmurf: false,
        error: ''
      }
    case UPDATE_SMURF_FAILURE:
      return {
        ...state,
        updatingSmurf: false,
        error: action.payload
      }
    case UPDATE_SMURF_END:
      return {
        ...state,
        clickedSmurf: action.payload
      }
    case DELETE_SMURF_START:
      return {
        ...state,
        deletingSmurf: true,
        error: ''
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        error: ''
      }
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        deletingSmurf: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default reducer;
