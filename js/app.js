let favorites = [];

const form = document.getElementById('add-favorite-form');
const favoritesList = document.getElementById('favorites-list');

const searchInput = document.getElementById('search-input')
const categoryFilter = document.getElementById('category-filter')




searchInput.addEventListener('input', searchFavorites);
categoryFilter.addEventListener('change', searchFavorites);


let coffeeName = 'Starbucks';
const maxRating = 5;
console.log(coffeeName + ' - ' + maxRating + '/5 stars');

let testPlace = { name: 'Central Park', category: 'parks', rating: 4 };
console.log(testPlace.name);   // "Central Park"



let myFavorite = {
    name: 'Starbucks on University Drive',
    category: 'coffee',
    rating: 5,
    notes: 'Great study spot with fast wifi',
    dateAdded: 'September 2026'
};
console.log(myFavorite.name);
let displayText = myFavorite.name + ' - Rating: ' + myFavorite.rating + '/5';


let today = new Date().toLocaleDateString();
console.log(today);                      // 9/17/2026

console.log(myFavorite);                 // click the arrow to expand it
console.log(typeof myFavorite.name);     // string
console.log(typeof myFavorite.rating);   // number

let placeName = 'Starbucks';
let rating = 5;
console.log(placeName + ' - ' + rating + '/5');
console.log('⭐'.repeat(rating) + ' ' + placeName);


// (9/21)
function greetFavorite(placeName, rating) {
    console.log(placeName + ' has ' + rating + ' stars!');
}
greetFavorite('Starbucks', 5);   // "Starbucks has 5 stars!"

const nameInput = document.getElementById('name');
console.log(nameInput.value);   //what the user typed

function addFavorite(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value;

    if (!name || !category) {
        alert('Please fill in name and category!');
        return;
    }

    const newFavorite = {
        name: name,
        category: category,
        rating: parseInt(document.getElementById('rating').value),
        notes: document.getElementById('notes').value.trim(),
        dateAdded: new Date().toLocaleDateString()
    };

    favorites.push(newFavorite);
    form.reset();
    displayFavorites();
}

form.addEventListener('submit', addFavorite);

function displayFavorites() {
    searchInput.value = '';          // clear the search box
    categoryFilter.value = 'all';    // back to All categories
    searchFavorites();
}



function deleteFavorite(index) {
    const favorite = favorites[index];
    if (confirm(`Delete "${favorite.name}"?`)) {
        favorites.splice(index, 1);   // remove 1 item at index
        searchFavorites();            // re-render, keeping current filter
    }
}



function searchFavorites() {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    favoritesList.innerHTML = '';

    if (favorites.length === 0){
        favoritesList.innerHTML = '<p class="empty-message">No Favorites yet. Add your first one above!</p>';
        return;
    }


const filtered = favorites.filter(function(favorite) {
    const matchesSearch = searchText === '' ||
        favorite.name.toLowerCase().includes(searchText) ||
        favorite.notes.toLowerCase().includes(searchText);
    const matchesCategory = selectedCategory === 'all' ||
        favorite.category === selectedCategory;
    return matchesSearch && matchesCategory;
});

if (filtered.length === 0) {
    favoritesList.innerHTML = '<p class="empty-message">No favorites match your search .</p>';
    return
}





filtered.forEach(function(favorite) {
    const index = favorites.indexOf(favorite);
    const stars = '⭐'.repeat(favorite.rating);
    favoritesList.innerHTML += `
        <div class="favorite-card">
            <h3>${favorite.name}</h3>
            <span class="favorite-category">${favorite.category}</span>
            <div class="favorite-rating">${stars} (${favorite.rating}/5)</div>
            <p class="favorite-notes">${favorite.notes}</p>
            <p class="favorite-date">Added: ${favorite.dateAdded}</p>
            <!-- the card contents from Lab 13.5 -->
            <button class="btn-danger" onclick="deleteFavorite(${index})">Delete</button>
        </div>`;
});

}



// The last line in js/app.js
displayFavorites();



