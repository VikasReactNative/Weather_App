import { BaseURL, weather_api_key } from "./Constraint";
import { log, logError } from "./util";
const priHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};
export const fetchInterceptor = (url, options) => {
    let newOptions = {
        method: 'GET',
        headers: priHeaders,
    }
    if (options) {
        newOptions = { ...newOptions, ...options };
    }
    return fetch(url, newOptions)
}
export const getRequest = (subURL,params) => {
    let url = BaseURL + subURL+`?key=${weather_api_key}${params??''}`;
    return new Promise((resolver, reject) => {
        fetchInterceptor(url)
            .then(res => res.json())
            .then(res => {
                resolver(res)
            })
            .catch(err => {
                reject(false)
                logError(err, url)
            })
    })
}