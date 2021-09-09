// write your code here
//assigning the url of our ramen data to a const variable
const BASE_URL = 'http://localhost:3000/ramens'

//fetching our ramen data from our url variable
fetch(BASE_URL)
    .then((resp) => resp.json())// converting it to json data
    .then((ramenData) => ramenData.forEach((ramen) => renderRamen(ramen)))//passing in the json data as "ramenData" and using forEach() to use a callback function on it for all the json data

//create function to render our ramen image and append it to div    
function renderRamen(ramenObject){
        const ramenImg = document.createElement('img');//create img element in html and assign to ramenImg variable

        ramenImg.src = ramenObject.image;//assigning ramenImg's image source to that of the passed in json object that is currently being iterated through

         // grab the div with id='ramen-menu' and assign it to variable menu
         const menu = document.getElementById('ramen_menu');

         // appending the ramenImg image to the div
         menu.appendChild(ramenImg);

        // add 'click' evenListener to the ramenImg element
        ramenImg.addEventListener('click', function(e){
            console.log(ramenObject);
            // grab the elements for name, image, Restaurant
            const detName = document.querySelector('.name');
            detName.textContent = ramenObject.name;

            const detImg = document.querySelector('.detail-image');
            detImg.src = ramenObject.image;

            const detRest = document.querySelector('.restaurant');
            detRest.innerText = ramenObject.restaurant;

            const rating = document.querySelector('#rating-display');
            rating.textContent = ramenObject.rating;

            const comment = document.querySelector('#comment-display');
            comment.textContent = ramenObject.comment;

        });
}


// Grab the user ramen form
const newRamenForm = document.getElementById('new-ramen')
// Attach a 'submit' evenListener to the "add-new-ramen form"
newRamenForm.addEventListener('submit', submitHandler)//in the event listener for 'submit' button, we pass in a function submitHandler to be executed(callback function)

//create function for user input
function submitHandler(e){
    e.preventDefault()//this prevents the page from refreshing after we click the 'submit' button

    //create a new ramen object using the values from the form
    const newRamen = {
        name: e.target["name"].value,
        restaurant: e.target["restaurant"].value,
        image: e.target["image"].value,
        rating: e.target["rating"].value,//the plus before the e.target[].value is simply to convert the number string(example:"1") to a integer
        comment: e.target["new-comment"].value
    }

    //use the event object as opposed querying
    renderRamen(newRamen)
    //e.target.reset just resets the text in the form to what it was before user input
    e.target.reset()
}