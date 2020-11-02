'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const drinks = require('./../../localdata/drinks')

const onAddToFavorites = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.addAFavorite(data)

    .then($('#message').html('Added'))
    .then(onShowFavorites())
    .then(ui.onAddAFavoriteSuccess)
    .catch(ui.onAddAFavoriteFailure)
}

const onShowFavorites = function () {
  api.showFavorites()

    .then(ui.onShowFavoritesSuccess)
    .then($('#message').html('List Of Favorites Activated!'))
    .catch(ui.onShowFavoritesFailure)
}

const onShowLocalDrinks = function () {
  $('#my-drinks').html('')

  for (let i = 0; i < drinks.default.length; i++) {
    console.log(drinks)

    const myImage0 = document.createElement('img')
    const myImage1 = document.createElement('img')
    const myImage2 = document.createElement('img')
    const myImage3 = document.createElement('img')
    const myImage4 = document.createElement('img')
    const myHeading = document.createElement('h1')

    myImage0.src = drinks.default[i].image
    myHeading.textContent = `#${i + 1}⤳`

    document.getElementById('my-drinks').appendChild(myHeading)
    document.getElementById('my-drinks').appendChild(myImage0)
    document.getElementById('my-drinks').appendChild(myImage1)
    document.getElementById('my-drinks').appendChild(myImage2)
    document.getElementById('my-drinks').appendChild(myImage3)
    document.getElementById('my-drinks').appendChild(myImage4)
  }
}

const onUpdateFavorites = function (event) {
  event.preventDefault()

  const updateData = event.target
  const selectionId = $(updateData).attr('id')
  const data = getFormFields(updateData)

  api.updateFavorites(data, selectionId)

    .then(ui.onUpdateFavoritesSuccess)
    .then(onShowFavorites)
    .then($('#message').html('Update success!'))
    .catch(ui.onUpdateFavoritesFailure)
}

const showUpdateForm = function (event) {
  event.preventDefault()

  const selectionId = $(event.target).attr('value')
  $('#' + selectionId).show()
}

const onDeleteFavorite = function (event) {

  const selectionId = $(event.target).attr('value')

  api.deleteFavorite(selectionId)

    .then(ui.onDeleteFavoriteSuccess)
    .then(onShowFavorites)
    .then($('#message').html('Delete success!'))
    .catch(ui.onDeleteFavoriteFailure)
}

const switchForms = function () {
  const signIn = document.getElementById('sign-in-form')
  const signUp = document.getElementById('sign-up')
  if (signIn.style.display === 'none') {
    signIn.style.display = 'flex'
    signUp.style.display = 'none'
  } else {
    signIn.style.display = 'none'
    signUp.style.display = 'flex'
  }
}

module.exports = {
  onAddToFavorites: onAddToFavorites,
  onShowLocalDrinks: onShowLocalDrinks,
  onShowFavorites: onShowFavorites,
  onUpdateFavorites: onUpdateFavorites,
  showUpdateForm: showUpdateForm,
  onDeleteFavorite: onDeleteFavorite,
  switchForms: switchForms
}
