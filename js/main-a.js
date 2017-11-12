// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

"use strict"

const url = 'images.html';
const ul = document.querySelector('ul');

function showImages() {
  fetch(url)
      .then(function(response) {
        // convert the response object to text
        response.text().then(function (responseText) {
          ul.innerHTML = responseText;
        });
      })
      .catch(function(err) {
    alert('Ooops! Something went wrong')
  });
}

window.onload = showImages;
