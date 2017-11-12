// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// After the loop print the HTML into <ul> element using innerHTML.

"use strict"

const ul = document.querySelector('ul');

function showImages() {
  fetch('images.json')
  // parse the fetch response as json data type
      .then(function(response) { return response.json(); })
      .then(function(data) {
        const json = data;
        for (var i = 0; i < json.length; i++) {
          // create new list item for each picture
          const li = document.createElement('li');
          li.innerHTML = '<figure>' + '<a href="img/original/' + json[i].mediaUrl + '"><img src="img/thumbs/' + json[i].mediaThumb + '"></a>' + '<figcaption>' + '<h3>' + json[i].mediaTitle + '</h3>' + '</figcaption>' + '</figure>';
          ul.appendChild(li);
        }
      })
      .catch(function(err) {
    console.log(err);
    alert('Something went wrong')
  });
}

window.onload = showImages;
