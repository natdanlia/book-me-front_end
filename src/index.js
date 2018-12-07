document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  // fetchRestaurants()
  logIn()
  })
function logIn() {
  let login = document.querySelector('.login')


  let formDiv = document.createElement('div')
  let form = document.createElement('form')
  form.id = "login-form"
  let label = document.createElement('label')
  label.innerText = 'User Name'

  let nameInput = document.createElement('input')
  label.for = nameInput
  let passLabel = document.createElement('label')
  let passInput = document.createElement('input')
  passInput.type = 'password'
  passLabel.for = passInput
  passLabel.innerText = 'Passoword'

  let submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.innerText = 'login'

  let br = document.createElement('br')
  // debugger
  login.appendChild(formDiv)
  formDiv.appendChild(form)



  form.append(label, nameInput, passLabel, passInput, submitButton)


  form.addEventListener('submit', function () {
    event.preventDefault()
    let login = document.querySelector('.login')
    login.innerHTML= ''

    let userName = []
    fetch('http://localhost:3000/users/')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
      data.forEach((jj) => userName.push(jj.name))
      if (userName.includes(nameInput.value)){
        // debugger
        fetchRestaurants()
        fetchUser(nameInput.value)
      }else {
        let login = document.querySelector('.login')
        let p = document.createElement('p')
        p.innerText = 'Wrong user name and passoword'
        login.append(p)
        logIn()
      }
    })
  })
}
function fetchRestaurants() {
  fetch('http://localhost:3000/restaurants')
  .then(res => res.json())
  .then(data => data.forEach(restaurant =>{
    // debugger;
    let restaurantInstance = new Restaurant(restaurant.id, restaurant.name, restaurant.image, restaurant.cuisine, restaurant.rating, restaurant.availability, restaurant.location)

    restaurantInstance.renderRestaurant()
  }))
}

function fetchUser(user) {
  let url_name = user.split(' ').join('_')
  // debugger;
  fetch(`http://localhost:3000/find_user/${url_name}`)
  .then(res => res.json())
  .then(data => {let userInstance = new User(data.id, data.name, data.age, data.telephone)
    userInstance.renderUser()
  })
  //

  //
  //   userInstance.renderUser()

}
