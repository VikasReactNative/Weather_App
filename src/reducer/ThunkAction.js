import store from ".";
import { getRequest } from "../util/ApiHelper";
import { logError } from "../util/util";
export const getWeather = (city) => {
  return dispatch => {
    getRequest('/current.json', `&q=${city.name}`)
      .then(response => {
        if (response) {
          dispatch({ type: 'WEATHER', payload: response });
        }
      })
      .catch(error => {
        logError(error, 'error in thunk');
      });
  };
};
export const getForecast = (city,count1) => {
  const {count}=store.getState().AuthReducer;
  return dispatch => {
    getRequest('/forecast.json', `&q=${city.name}&days=${count1??count}`)
      .then(response => {
        if (response) {
          dispatch({ type: 'FORECAST', payload: response?.forecast?.forecastday??[] });
        }
      })
      .catch(error => {
        logError(error, 'error in thunk');
      });
  };
};
