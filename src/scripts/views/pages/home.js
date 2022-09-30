import RestaurantsSource from '../../data/restaurants-source';
import { createCardRestaurant } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <h2 class="restaurant-list__title">Explore Restaurant</h2>
        <div id="containerCards" class="restaurant-list__container-cards"></div>
    `;
  },
  async afterRender() {
    const restaurants = await RestaurantsSource.getAllRestaurants();
    const containerCards = document.querySelector('#containerCards');
    restaurants.forEach((itemRestaurant) => {
      containerCards.innerHTML += createCardRestaurant(itemRestaurant);
    });
  },
};

export default Home;
