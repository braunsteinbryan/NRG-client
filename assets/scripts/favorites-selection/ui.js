'use strict'
// const drinks = require('./../../localdata/drinks')
// const store = require('./../store')

const onAddAFavoriteSuccess = function (response) {
  $('#message').show().fadeOut(2000)
  $('#add-to-favorites').trigger('reset')
}

const onAddAFavoriteFailure = function (error) {
  $('#message').text('Adding a drink to your favorites has failed. Try again!')
}

const onShowFavoritesSuccess = function (response) {
  $('#favorites-list').html('')
  $('#message').show().fadeOut(2000)
  const selections = response.selections
  for (let i = 0; i < selections.length; i++) {
    const myHeading = document.createElement('h6')
    const updateButton = document.createElement('button')
    const deleteButton = document.createElement('button')

    updateButton.setAttribute('id', 'update-button')
    deleteButton.setAttribute('id', 'delete-button')
    updateButton.value = selections[i]._id
    deleteButton.value = selections[i]._id
    myHeading.textContent = '#' + selections[i].id
    updateButton.textContent = 'Update'
    deleteButton.textContent = 'Delete'

    document.getElementById('favorites-list').appendChild(myHeading)
    document.getElementById('favorites-list').appendChild(updateButton)
    document.getElementById('favorites-list').appendChild(deleteButton)

    $('#favorites-list').append(`<form class="update-favorites" id='${selections[i]._id}'>
      <fieldset>
        <legend>Make a selection for your favorite!</legend>

            <label>Selection</label>

            <input name="selection[id]" type="number" min=1 max=5 placeholder="Favorite goes here" />

          <input type="submit" value="Go">
      </fieldset>
    </form>`)
    $('.update-favorites').hide()
  }
}

const onShowFavoritesFailure = function (error) {
  $('#message').text('Can\'t see your favorites. Try again!')
}

const onUpdateFavoritesSuccess = function (response) {
  $('#message').show().fadeOut(2000)
}

const onUpdateFavoritesFailure = function (error) {
  $('#message').text('Update car failed. Try again!')
}

const onDeleteFavoriteSuccess = function (response) {
  $('#message').show().fadeOut(2000)
}

const onDeleteFavoriteFailure = function (error) {
  $('#message').text('Delete car failed. Try again!')
}

// =============== STYLING ===============

// const menuToggle = document.querySelector('#menu-toggle')
// const activeElements = document.querySelectorAll('.active-element')
// const toggledMenu = menuToggle.addEventListener('click', function () {
//   for (let i = 0; i < activeElements.length; i++) {
//     activeElements[i].classList.toggle('active')
//   }
// })
module.exports = {
  onAddAFavoriteSuccess: onAddAFavoriteSuccess,
  onAddAFavoriteFailure: onAddAFavoriteFailure,
  onShowFavoritesSuccess: onShowFavoritesSuccess,
  onShowFavoritesFailure: onShowFavoritesFailure,
  onUpdateFavoritesSuccess: onUpdateFavoritesSuccess,
  onUpdateFavoritesFailure: onUpdateFavoritesFailure,
  onDeleteFavoriteSuccess: onDeleteFavoriteSuccess,
  onDeleteFavoriteFailure: onDeleteFavoriteFailure
}
