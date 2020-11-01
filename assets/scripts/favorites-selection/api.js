'use strict'

const config = require('./../config')
const store = require('./../store')

const addAFavorite = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/selections',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const showFavorites = function (data) {
  return $.ajax({
    url: config.apiUrl + '/selections',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateFavorites = function (data, selectionId) {
  return $.ajax({
    url: config.apiUrl + '/selections/' + `${selectionId}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: data
  })
}

const deleteFavorite = function (selectionId) {
  return $.ajax({
    url: config.apiUrl + '/selections/' + `${selectionId}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  addAFavorite: addAFavorite,
  showFavorites: showFavorites,
  updateFavorites: updateFavorites,
  deleteFavorite: deleteFavorite
}
