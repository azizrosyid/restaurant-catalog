import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantsPost {
  static async postReview({ id, name, review }) {
    const header = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify({ id, name, review }),
    };

    const response = await fetch(API_ENDPOINT.REVIEW, header);
    const responseJson = await response.json();
    return responseJson.customerReviews; // array of object
  }
}

export default RestaurantsPost;
