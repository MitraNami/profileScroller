const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingfor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/82.jpg'
  },
  {
    name: 'Jen Smith',
    age: 26,
    gender: 'female',
    lookingfor: 'male',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/82.jpg'
  },
  {
    name: 'William Johnson',
    age: 38,
    gender: 'male',
    lookingfor: 'female',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  }
];

// Profile Iterator
let profile = profileIterator(data);


// Event handler for clicking the next button
document.getElementById('next')
  .addEventListener('click', nextProfile);


function nextProfile(evt) {
  const {value, done} = profile.next();
  if (!done) {
    // Insert the Image
    document.getElementById('imageDisplay').innerHTML =
    `<img src=${value.image} alt="avatar" />`;
    // Insert the User Info
    document.getElementById('profileDisplay').innerHTML =
      `<ul class="list-group m-2">
        <li class="list-group-item">Name: ${value.name}</li>
        <li class="list-group-item">Age: ${value.age}</li>
        <li class="list-group-item">Location: ${value.location}</li>
        <li class="list-group-item">Preference: ${value.gender} Looking for ${value.lookingfor}</li>
      </ul>`;
  } 
}


function profileIterator(data) {
  let index = 0;
  return {
    next: function() {
      return index < data.length ?
        {value: data[index++], done: false} :
        {done: true};
    }
  }
}