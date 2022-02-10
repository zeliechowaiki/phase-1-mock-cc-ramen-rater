// write your code here
let ramenData;
let currentRamen;
const ramenMenu = document.getElementById('ramen-menu');
const imgContainer = document.querySelector('.detail-image');
const nameContainer = document.querySelector('.name');
const restaurantContainer = document.querySelector('.restaurant');
const ratingContainer = document.getElementById('rating-display');
const commentContainer = document.getElementById('comment-display');
const form = document.getElementById('new-ramen');

function fetchRamen() {
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(fetchedData => {
        ramenData = fetchedData;
        ramenData.map(ramen => createMenu(ramen));
    })
}
fetchRamen();

function createMenu (ramen) {
    const ramenChoice = document.createElement('img');
    ramenChoice.src=ramen.image;
    ramenMenu.appendChild(ramenChoice);

    ramenChoice.addEventListener('click', () => {
        displayRamen(ramen);
    });
}

function displayRamen(currentRamen) {
    imgContainer.src = currentRamen.image;
    nameContainer.textContent = currentRamen.name;
    restaurantContainer.textContent = currentRamen.restaurant;
    ratingContainer.textContent = currentRamen.rating;
    commentContainer.textContent = currentRamen.comment;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newRamen = {
        name: form.name.value,
        restaurant: form.restaurant.value,
        image: form.image.value,
        rating: form.rating.value,
        comment: form.comment.value
    }
    createMenu(newRamen);
    form.reset();
})