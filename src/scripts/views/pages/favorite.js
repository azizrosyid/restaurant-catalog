import FavoriteRestaurantsIdb from '../../data/favoriterestaurants-idb';
import { createCardRestaurant } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <h2 class="restaurant-list__title">Favorite Restaurants</h2>
        <div id="containerCards" class="restaurant-list__container-cards"></div>
    `;
  },
  async afterRender() {
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();
    const containerCards = document.querySelector('#containerCards');
    restaurants.forEach((itemRestaurant) => {
      containerCards.innerHTML += createCardRestaurant(itemRestaurant);
    });
  },
};

export default Favorite;
