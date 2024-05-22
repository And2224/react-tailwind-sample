import * as customAction from '../actions/customAction';

const customReducer = (state = "", action) => {
  switch (action.type)
  {
    case customAction.SAVE_NEW_CODE:
      return action.payload;

    default:
      return state;
      
  }
}

export default customReducer;