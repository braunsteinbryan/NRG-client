'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const favoritesSelectionEvents = require('./favorites-selection/events')

$(() => {
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#add-to-favorites').on('submit', favoritesSelectionEvents.onAddToFavorites)
  $('#show-favorites').on('click', favoritesSelectionEvents.onShowFavorites)
  $('#show-local-drinks').on('click', favoritesSelectionEvents.onShowLocalDrinks)
  $('#favorites-list').on('click', '#update-button', favoritesSelectionEvents.showUpdateForm)
  $('#favorites-list').on('submit', '.update-favorites', favoritesSelectionEvents.onUpdateFavorites)
  $('#favorites-list').on('click', '#delete-button', favoritesSelectionEvents.onDeleteFavorite)
  $('#switch-to-sign-in-link').on('click', favoritesSelectionEvents.switchForms)
  $('#switch-to-sign-up-link').on('click', favoritesSelectionEvents.switchForms)
  $('#sign-in-form').hide()
  $('#nav').hide()
  $('#assets-tobe-brought-back').hide()
  $('.container').hide()
  $('#show-favorites').hide()
  $('#favorites-list').hide()
})
