import {
  pageWithImgs
} from './constants.js'
const url = 'https://submarine.nomoredomains.work/'
const movies = 'movies'
const signup = 'signup'
const signin = 'signin'
const get = 'users/me'

function getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
    return res.json()
  }

export const sendLike = (film) => {
  if (film.country === null) {
    film.country = 'noname'
  }
  if (film.nameEN === '') {
    film.nameEN = 'noname'
  }
  if (film.trailerLink === null) {
    film.trailerLink = 'https://www.youtube.com/watch?v=W9RCD7gML8o&ab_channel=%D0%A2%D1%80%D0%B8%D0%B4%D0%BD%D1%8F%D0%B4%D0%BE%D0%B6%D0%B4%D1%8F'
  } else if (!film.trailerLink.includes('http')) {
    film.trailerLink = 'https://www.youtube.com/watch?v=W9RCD7gML8o&ab_channel=%D0%A2%D1%80%D0%B8%D0%B4%D0%BD%D1%8F%D0%B4%D0%BE%D0%B6%D0%B4%D1%8F'
  }
  return fetch(url+movies, {
    method: 'POST',
    headers: {
      authorization: 'Bearer '+localStorage.jwt,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      country: film.country,
      director: film.director,
      duration: film.duration,
      year: film.year,
      description: film.description,
      image: pageWithImgs+film.image.url,
      trailer: film.trailerLink,
      thumbnail: film.trailerLink,
      movieId: film.id,
      nameRU: film.nameRU,
      nameEN: film.nameEN,
    })
  })
  .then(
    (res) => {
      return res.json()
    }
  )
}

export const delLike = (id) => {
  return fetch(url+movies+'/'+id, {
    method: 'DELETE',
    headers: {
      authorization: 'Bearer '+localStorage.jwt
    }
  })
  .then(
    (res) => {
      return getResponseData(res)
    }
  )
}

export const getSavedFilms = () => {
  return fetch(url+movies, {
    headers: {
      authorization: 'Bearer '+localStorage.jwt
    },
  })
  .then(
    (res) => {
      return getResponseData(res)
    }
  )
}

export const regg = (name, email, pass) => {
  return fetch(url+signup, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': name,
      'email': email,
      'password': pass,
    })
  })
  .then(
    (res) => {
      return res.json()
    }
  )
}

export const auth = (email, pass) => {
  return fetch(url+signin, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'email': email,
      'password': pass,
    })
  })
  .then(
    (res) => {
      return res.json()
    }
  )
}

export const getUser = () => {
  return fetch(url+get, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: 'Bearer '+localStorage.jwt,
    }
  })
  .then(
    (res) => {
      return getResponseData(res)
    }
  )
}

export const updateUser = (name, email) => {
    return fetch(url+get, {
      method: 'PATCH',
      headers: {
        authorization: 'Bearer '+localStorage.jwt,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
      })
    })
    .then((res) => {
      return res.json()
    })
  }
