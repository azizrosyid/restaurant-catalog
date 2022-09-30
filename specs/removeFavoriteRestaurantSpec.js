import FavoriteRestaurantsIdb from '../src/scripts/data/favoriterestaurants-idb';
import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';

describe('Remove Favorite Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
    FavoriteRestaurantsIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should display remove favorite button when the restaurant has been add to favorited', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer',
      ),
      restaurant: { id: 1 },
    });

    expect(
      document.querySelector('[aria-label="favorite this restaurant"]'),
    ).toBeFalsy();
  });

  //   should able to remove favorite restaurant
  it('should able to remove favorite restaurant', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer',
      ),
      restaurant: { id: 1 },
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });

  //   should not throw error when the restaurant has not been add to favorited
  it('should not throw error when the restaurant has not been add to favorited', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer',
      ),
      restaurant: { id: 1 },
    });

    await FavoriteRestaurantsIdb.deleteRestaurant(1);

    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
