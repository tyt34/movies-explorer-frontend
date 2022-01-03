import {
  pageWithImgs
} from './constants.js'

export const getContent = () => {
  return fetch(pageWithImgs+'/beatfilm-movies', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then((res) => {return res.json()})
}
