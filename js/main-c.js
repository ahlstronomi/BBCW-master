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



          // Set attributes
          img.setAttribute("src", "img/thumbs/" + json[i].mediaThumb);
          link.setAttribute("href", "img/original/" + json[i].mediaUrl);

          // Nest elements
          figcaption.appendChild(h3);
          li.appendChild(figure);
          figure.appendChild(link);
          link.appendChild(img);
          figure.appendChild(figcaption);
          ul.appendChild(li);
          h3.appendChild(textNode);

        }
      })
      .catch(function(err) {
    console.log(err);
    alert('Something went wrong')
  });
}

window.onload = showImages;