import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantsSource {
  static async getAllRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants; // array of object
  }

  static async searchRestaurants(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants; // array of object
  }

  static async getDetailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant; // object
  }
}

export default RestaurantsSource;
