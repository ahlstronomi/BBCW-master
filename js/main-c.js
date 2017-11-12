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
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

"use strict"

const ul = document.querySelector('ul');

function showImages() {
  fetch('images.json')
      .then(function(response) { return response.json(); })
      .then(function(data) {
        const json = data;
        for (var i = 0; i < json.length; i++) {

          let li = document.createElement('li');
          let figure = document.createElement('figure');
          let link = document.createElement('a');
          let img = document.createElement('img');
          let figcaption = document.createElement('figcaption');
          let h3 = document.createElement('h3');

          let textNode = document.createTextNode(json[i].mediaTitle);

          li.appendChild(figure);
          ul.appendChild(li);

          figure.appendChild(link);

          link.setAttribute("href", "img/original/" + json[i].mediaUrl);
          link.appendChild(img);

          img.setAttribute("src", "img/thumbs/" + json[i].mediaThumb);

          figure.appendChild(figcaption);

          figcaption.appendChild(h3);
          h3.appendChild(textNode);

        }
      })
      .catch(function(err) {
    console.log(err);
    alert('Something went wrong')
  });
}

window.onload = showImages;