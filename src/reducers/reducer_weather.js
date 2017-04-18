import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action){
  // here we use an array as data structure beacuse we have to display weathe data
  //of multiple cities in multiple lines.Hence default value of state variable = []
  console.log(action.payload);
  switch(action.type){
    case FETCH_WEATHER :
      return [action.payload.data, ...state]
  }
  return state;
}
