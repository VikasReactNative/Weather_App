import * as Actions from './ActionTypes';
const user = {
  weather:{},
  currentCity:{},
  forecast:[],
  count:5,
};
const AuthReducer = (state = user, action) => {
  console.log(action);
  switch (action.type) {
    case Actions.WEATHER:
      return { ...state, weather: action.payload };
    case Actions.CITY:
      return { ...state, currentCity: action.payload };
    case Actions.FORECAST:
      return { ...state, forecast: action.payload };
    case Actions.COUNT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};
export default AuthReducer;
