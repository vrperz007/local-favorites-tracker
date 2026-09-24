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

const practiceForm = document.getElementById('add-favorite-form')

function handleSubmit(event){
    event.preventDefault();
    console.log('You typed:' + nameInput.value);
}

practiceForm.addEventListener('submit', handleSubmit);