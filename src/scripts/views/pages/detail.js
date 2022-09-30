import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import {
  createInformationRestaurant,
  createReviewSection,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <h2 class="restaurant-list__title">Detail Restaurant</h2>
    <div id="detailRestaurant" class="restaurant-list__detail"></div>
    <div class="restaurant-list__like_container"></div>
    `;
  },

  async afterRender() {
    const id = UrlParser.getIdFromUrl();
    const detailRestaurant = await RestaurantsSource.getDetailRestaurant(id);

    const containerDetailRestaurant = document.querySelector('#detailRestaurant');
    containerDetailRestaurant.innerHTML
      += createInformationRestaurant(detailRestaurant);
    containerDetailRestaurant.innerHTML
      += createReviewSection(detailRestaurant);

    FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        '.restaurant-list__like_container',
      ),
      restaurant: {
        id: detailRestaurant.id,
        name: detailRestaurant.name,
        rating: detailRestaurant.rating,
        pictureId: detailRestaurant.pictureId,
        description: detailRestaurant.description,
        city: detailRestaurant.city,
      },
    });
  },
};

export default Detail;
