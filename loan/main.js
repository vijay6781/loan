// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
apiKey: "AIzaSyAWIjw2yst3MA_GbCA7ubrnGz3G6RvvX-4",
authDomain: "okaychat-83e1c.firebaseapp.com",
databaseURL: "https://okaychat-83e1c-default-rtdb.asia-southeast1.firebasedatabase.app/",
projectId: "okaychat-83e1c",
storageBucket: "okaychat-83e1c.appspot.com",
messagingSenderId: "1047817614674",
appId: "1:1047817614674:web:2f522c8c3f47158226b68b"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();


document.querySelector('#contactForm').addEventListener('submit', e => {
e.preventDefault()

let name = document.querySelector('#name').value;
let email = document.querySelector('#email').value;
let company= document.querySelector('#company').value;
let phone = document.querySelector('#phone').value;
let amount = document.querySelector('#loan').value;


db.collection('messages')
.add({
name:name,
email:email ,
phone:phone,
company:company,
amount:amount,
date: firebase.firestore.Timestamp.fromMillis(Date.now())
})
.then(docRef => {
console.log(`Document written with ID: ${docRef.id}`)
document.querySelector('#contactForm').reset()
})
.catch(error => {
console.log(`Error adding document: ${error}`)
})
document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
})

// Reference messages collection
// var messagesRef = firebase.database().ref('messages');

// // Listen for form submit
// document.getElementById('contactForm').addEventListener('submit', submitForm);

// // Submit form
// function submitForm(e){
//   e.preventDefault();

//   // Get values
//   var name = getInputVal('name');
//   var company = getInputVal('company');
//   var email = getInputVal('email');
//   var phone = getInputVal('phone');
//   var message = getInputVal('message');
//   console.log(name);

//   // Save message
//   saveMessage(name, company, email, phone, message);

//   // Show alert
  // document.querySelector('.alert').style.display = 'block';

  // // Hide alert after 3 seconds
  // setTimeout(function(){
  //   document.querySelector('.alert').style.display = 'none';
  // },3000);

//   // Clear form
//   document.getElementById('contactForm').reset();
// }

// // Function to get get form values
// function getInputVal(id){
//   return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(name, company, email, phone, message){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: name,
//     company:company,
//     email:email,
//     phone:phone,
//     message:message
//   });
// }



const options = [
  "1 lakh",
  "2 lakh",
  "3 lakh",
  "4 lakh",
  "5 lakh",
  "6 lakh",
  "7 lakh",
  "8 lakh",
  "9 lakh",
  "10 lakh",
  "11 lakh",
  "12 lakh",
  "13 lakh",
  "14 lakh",
  "15 lakh",
  "16 lakh",
  "17 lakh",
  "18 lakh",
  "19 lakh",
  "20 lakh",
  "21 lakh",
  "22 lakh",
  "23 lakh",
  "24 lakh",
  "25 lakh",
  "26 lakh",
  "27 lakh",
  "28 lakh",
  "29 lakh",
  "30 lakh",
  "31 lakh",
  "32 lakh",
  "33 lakh",
  "34 lakh",
  "35 lakh",
  "36 lakh",
  "37 lakh",
  "38 lakh",
  "39 lakh",
  "40 lakh",
  "41 lakh",
  "42 lakh",
  "43 lakh",
  "44 lakh",
  "45 lakh",
  "46 lakh",
  "47 lakh",
  "48 lakh",
  "49 lakh",
  "50 lakh",
  "51 lakh",
  "52 lakh",
  "53 lakh",
  "54 lakh",
  "55 lakh",
  "56 lakh",
  "57 lakh",
  "58 lakh",
  "59 lakh",
  "60 lakh",
  "61 lakh",
  "62 lakh",
  "63 lakh",
  "64 lakh",
  "65 lakh",
  "66 lakh",
  "67 lakh",
  "68 lakh",
  "69 lakh",
  "70 lakh",
  "71 lakh",
  "72 lakh",
  "73 lakh",
  "74 lakh",
  "75 lakh",
  "76 lakh",
  "77 lakh",
  "78 lakh",
  "79 lakh",
  "80 lakh",
  "81 lakh",
  "82 lakh",
  "83 lakh",
  "84 lakh",
  "85 lakh",
  "86 lakh",
  "87 lakh",
  "88 lakh",
  "89 lakh",
  "90 lakh",
  "91 lakh",
  "92 lakh",
  "93 lakh",
  "94 lakh",
  "95 lakh",
  "96 lakh",
  "97 lakh",
  "98 lakh",
  "99 lakh",
  "1 crore"
];


const loan = document.getElementById('loan');
const autocompleteOptions = document.getElementById('autocompleteOptions');

// Function to show the autocomplete options
function showOptions() {
const searchText = loan.value.toLowerCase();
const filteredOptions = options.filter(option => option.toLowerCase().startsWith(searchText));

if (filteredOptions.length > 0) {
  autocompleteOptions.innerHTML = filteredOptions.map(option => `<div>${option}</div>`).join('');
  autocompleteOptions.style.display = 'block';
} else {
  autocompleteOptions.style.display = 'none';
}
}

// Event listener for input change
loan.addEventListener('input', showOptions);

// Event listener to hide options when clicking outside the input field
window.addEventListener('click', function (event) {
if (!event.target.matches('#loan') && !event.target.matches('.autocomplete-options div')) {
  autocompleteOptions.style.display = 'none';
}
});

// Event listener for option selection
autocompleteOptions.addEventListener('click', function (event) {
if (event.target.tagName === 'DIV') {
  loan.value = event.target.textContent;
  autocompleteOptions.style.display = 'none';
}
});



