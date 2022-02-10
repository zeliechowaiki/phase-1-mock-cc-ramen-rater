// write your code here
let ramenData;
let ramenToEdit;
const ramenMenu = document.getElementById('ramen-menu');
const imgContainer = document.querySelector('.detail-image');
const nameContainer = document.querySelector('.name');
const restaurantContainer = document.querySelector('.restaurant');
const ratingContainer = document.getElementById('rating-display');
const commentContainer = document.getElementById('comment-display');
const newForm = document.getElementById('new-ramen');
const updateForm = document.getElementById('edit-ramen');
const deleteBtn = document.getElementById('delete-button');

function fetchRamen() {
    fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(fetchedData => {
        ramenData = fetchedData;
        ramenData.map(ramen => createMenu(ramen));

        displayRamen(ramenData[0]);
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

    ramenToEdit = currentRamen;
}

newForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newRamen = {
        name: newForm.name.value,
        restaurant: newForm.restaurant.value,
        image: newForm.image.value,
        rating: newForm.rating.value,
        comment: newForm.comment.value
    }
    createMenu(newRamen);
    newForm.reset();
})

updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    ramenToEdit.rating = updateForm.rating.value;
    ramenToEdit.comment = updateForm.comment.value;

    ratingContainer.textContent = ramenToEdit.rating;
    commentContainer.textContent = ramenToEdit.comment;

    updateForm.reset();
})