class Restaurant {

  constructor(id, name, image, cuisine, rating, availability, location) {
    this.id = id,
    this.name = name,
    this.image = image,
    this.cuisine = cuisine,
    this.rating = rating,
    this.availability = availability,
    this.location = location
    Restaurant.all.push(this)
  }

  renderRestaurant() {
    let div = document.createElement('div')
    div.className = 'restaurant-card'

    div.addEventListener('click', () => {
      let div = document.querySelector('.detail')
      // debugger;
      div.innerHTML = ''
      let h2 = document.createElement('h2')
      let img = document.createElement('img')
      let pCuisine = document.createElement('p')
      let h5 = document.createElement('h5')
      let span= document.createElement('span')
      let pLocation = document.createElement('p')
      let reserveButton = document.createElement('button')

      img.className = 'big-image'
      // debugger;
      h2.innerText = this.name
      img.src = this.image
      pCuisine.innerText = this.cuisine
      h5.innerText = this.rating
      span.innerText = 'Its availabile for reservation'
      pLocation.innerText = this.location
      reserveButton.innerText = "Make a Reservation"

      div.append(h2,img,pCuisine,h5,span,pLocation,reserveButton)

    })

    let h2 = document.createElement('h2')
    let img = document.createElement('img')
    let pCuisine = document.createElement('p')
    let h5 = document.createElement('h5')
    let pCity = document.createElement('p')

    // let button = document.createElement('button')
    // let pLocation = document.createElement('p')
    img.className = 'small-image'
    h2.innerText = this.name
    img.src = this.image
    pCuisine.innerText = this.cuisine
    h5.innerText = this.rating
    pCity.innerText = this.location.split(', ')[1]
    // button.innerText = this.availability
    // pLocation.innerText = this.location


    // let wrapper = document.getElementById('wrapper')

    wrapper.append(div)
    div.append(h2,img,pCuisine,h5,pCity)



  }





}
Restaurant.all = []
