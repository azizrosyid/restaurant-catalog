import FavoriteRestaurantsIdb from '../data/favoriterestaurants-idb';
import {
  createAddFavoriteButtonTemplate,
  createRemoveFavoritedButtonTemplate,
} from '../views/templates/template-creator';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      await this._renderRemoveFavoriteButton();
    } else {
      await this._renderAddFavoriteButton();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantsIdb.getRestaurant(id);
    return !!restaurant;
  },

  async _renderAddFavoriteButton() {
    this._favoriteButtonContainer.innerHTML = createAddFavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestaurantsIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  async _renderRemoveFavoriteButton() {
    this._favoriteButtonContainer.innerHTML = createRemoveFavoritedButtonTemplate();

    const favoriteButton = document.querySelector('#favoriteButton');
    favoriteButton.addEventListener('click', async () => {
      const { id } = this._restaurant;
      await FavoriteRestaurantsIdb.deleteRestaurant(id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
