import FavoriteRestaurantsIdb from '../src/scripts/data/favoriterestaurants-idb';
import FavoriteButtonInitiator from '../src/scripts/utils/favorite-button-initiator';

describe('Favorite Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the favorite button when restaurant has not been liked before', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer',
      ),
      restaurant: { id: 1 },
    });

    expect(
      document.querySelector('[aria-label="favorite this restaurant"]'),
    ).toBeTruthy();
  });

  it('should not show the remove favorite button when restaurant has not been liked before', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer',
      ),
      restaurant: { id: 1 },
    });

    expect(
      document.querySelector('[aria-label="remove favorite this restaurant"]'),
    ).toBeFalsy();
  });

  it('should be able to favorite restaurant', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer',
      ),
      restaurant: { id: 1 },
    });
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantsIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestaurantsIdb.deleteRestaurant(1);
  });

  // it should not add a restaurant to the database if the restaurant is already there
  it('should not add a restaurant to the database if the restaurant is already there', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector(
        '#favoriteButtonContainer',
      ),
      restaurant: { id: 1 },
    });

    await FavoriteRestaurantsIdb.putRestaurant({ id: 1 });
    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);

    FavoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should not add a movie when it has no id', async () => {
    await FavoriteButtonInitiator.init({
      favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
      restaurant: {},
    });

    document.querySelector('#favoriteButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
