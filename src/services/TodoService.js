import axios from "axios/index";

export function getApiCall ( url, config ) {
  return axios.get( url, config)
    .then( res => res )
    .catch( err => err )
}

export function postApiCall ( url, data, config ) {
  return axios.post( url, data, config )
    .then( res => res )
    .catch( err => err )
}

export function putApiCall ( url, data, config ) {
  return axios.put( url, data, config )
    .then( res => res )
    .catch( err => err)


}