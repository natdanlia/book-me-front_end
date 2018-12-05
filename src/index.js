document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Loaded and Parsed!', 'color: magenta')
  fetchRestaurants()
  }
)

function fetchRestaurants() {
  fetch('http://localhost:3000/restaurants')
  .then(res => res.json())
  .then(data => data.forEach(restaurant =>{
    // debugger;
    let restaurantInstance = new Restaurant(restaurant.id, restaurant.name, restaurant.image, restaurant.cuisine, restaurant.rating, restaurant.availability, restaurant.location)

    restaurantInstance.renderRestaurant()
  }))


}
