'use strict'

const store = require('./../store')
const favoritesSelectionEvents = require('./../favorites-selection/events')

const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email + ' !')
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
}

const onSignUpFailure = function (error) {
    $('#message').text('Sign up failed. Try again!')
}

const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email + ' !').show().fadeOut(2000)
  $('#sign-in-form').trigger('reset')
  $('#change-password-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#sign-out-link').show()
  $('#create-a-car').show()
  $('#show-cars').show()
  $('#sign-out-link').show()
  favoritesSelectionEvents.onShowLocalDrinks()
  $('#nav').show()
  $('.container').show()
  $('#show-favorites').show()
  $('#favorites-list').show()
}

const onSignInFailure = function (error) {
    $('#message').text('Sign in failed. Try again!')
}

const onChangePasswordSuccess = function (response) {
  $('#message').html('Thanks for changing your password!').show().fadeOut(2000)
  $('#change-password-form').trigger('reset')
}

const onChangePasswordFailure = function (error) {
  $('#message').text('Change password failed. Try again!')
}

const onSignOutSuccess = function () {
  $('#welcome-message').text('You have been successfully signed out!')
  $('#sign-in-form').show()
  $('#change-password-form').hide()
  $('#sign-out-link').hide()
  $('#sign-up-form').show()
  $('#message').html('Successfully signed out').show().fadeOut(2000)
  $('#create-a-car').hide()
  $('#show-cars').hide()
  $('#my-cars').hide()
}

const onSignOutFailure = function (error) {
  $('#message').text('Sign out failed. Try again!')
}

module.exports = {
  onSignUpSuccess: onSignUpSuccess,
  onSignUpFailure: onSignUpFailure,
  onSignInSuccess: onSignInSuccess,
  onSignInFailure: onSignInFailure,
  onChangePasswordSuccess: onChangePasswordSuccess,
  onChangePasswordFailure: onChangePasswordFailure,
  onSignOutSuccess: onSignOutSuccess,
  onSignOutFailure: onSignOutFailure
}
