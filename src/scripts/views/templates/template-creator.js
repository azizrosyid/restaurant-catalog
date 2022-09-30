import IMAGE_ENDPOINT from '../../globals/image-endpoint';

const createAddFavoriteButtonTemplate = () => `
  <button id="favoriteButton" class="restaurant-list__detail__like" aria-label="favorite this restaurant"">
    <img src="../images/icons/white-heart-outline.svg" width=100% />
  </button>
`;

const createRemoveFavoritedButtonTemplate = () => `
  <button id="favoriteButton" class="restaurant-list__detail__like" aria-label="remove favorite this restaurant">
    <img src="../images/icons/white-heart-vector.svg" width=100% />
  </button>
`;

const createCardRestaurant = ({
  id,
  name,
  pictureId,
  city,
  description,
  rating,
}) => {
  let displayRating = rating.toString();
  displayRating += Number.isInteger(rating) ? '.0' : '';

  const classNameRating = rating >= 4 ? 'bg-green' : 'bg-yellow';

  return `
<div class="restaurant-list__card-item">
  <img
    class="card-item__image lazyload"
    data-src="${IMAGE_ENDPOINT.SMALL + pictureId}"
    alt=""
  />
  <p class="card-item__rating">
    Rating : <span class="${classNameRating}">${displayRating}</span>
  </p>
  <h3 class="card-item__heading"><a href="#/detail/${id}">${name}</a></h3>
  <p class="card-item__description">${description}</p>
  <p class="card-item__location">
    <img src="../images/icons/pin-21504.png" alt="" />${city}
  </p>
</div>`;
};

const createInformationRestaurant = ({
  name,
  description,
  city,
  address,
  pictureId,
  categories,
  menus,
}) => {
  const { foods, drinks } = menus;
  return `

  <div class="restaurant-list__detail__wrapper">
    <div class="restaurant-list__detail__image">
      <img
        class="lazyload"
        data-src="${IMAGE_ENDPOINT.LARGE + pictureId}"
        width="100%"
      />
    </div>
    <div class="restaurant-list__detail__information">
      <h3 class="restaurant-list__detail__name">${name}</h3>
      <div class="restaurant-list__detail__table">
        <div class="restaurant-list__detail__table__item">
          <label>Kategori</label>
          <span>${categories.map((category) => category.name).join(', ')}</span>
        </div>
        <div class="restaurant-list__detail__table__item">
          <label>Alamat</label>
          <span>${address}</span>
        </div>
        <div class="restaurant-list__detail__table__item">
          <label>Kota</label>
          <span>${city}</span>
        </div>
      </div>
      <h3 class="restaurant-list__detail__name">Menu</h3>
      <div class="restaurant-list__detail__menu">
        <div class="restaurant-list__detail__menu__item">
          <h4>Foods</h4>
          <ol>
            ${foods.map((food) => `<li>${food.name}</li>`).join('')}
          </ol>
        </div>
        <div class="restaurant-list__detail__menu__item">
          <h4>Drinks</h4>
          <ol>
            ${drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
          </ol>
        </div>
      </div>
    </div>
  </div>
  <div class="restaurant-list__detail__description">
    <h3>Description Restaurant</h3>
    <p>${description}</p>
  </div>
`;
};

const createRatingCard = ({ name, review, date }) => `      
  <div class="restaurant-list__detail__rating__card">
    <div class="restaurant-list__detail__rating__card__wrapper">
      <img
        class="restaurant-list__detail__rating__card__avatar lazyload"
        data-src="${IMAGE_ENDPOINT.AVATAR(name)}"
        width="40"
        height="40"
      />
      <span class="restaurant-list__detail__rating__card__name">${name}</span>
    </div>
    <p class="restaurant-list__detail__rating__card__review">${review}</p>
    <span class="restaurant-list__detail__rating__card__date">${date}</span>
  </div>
  `;

const createReviewSection = ({ rating, customerReviews }) => {
  let displayRating = rating.toString();
  displayRating += Number.isInteger(rating) ? '.0' : '';
  return `
  <div class="restaurant-list__detail__rating">
    <h3>Rating Restaurant</h3>
    <div class="restaurant-list__detail__rating_overall">
      <p>Average Customer Review :</p>
      <span>${displayRating} / 5.0</span>
    </div>
    <div class="restaurant-list__detail__rating__container">${customerReviews
    .map((custReview) => createRatingCard(custReview))
    .join('')}</div>
  </div>
  `;
};

export {
  createCardRestaurant,
  createAddFavoriteButtonTemplate,
  createRemoveFavoritedButtonTemplate,
  createInformationRestaurant,
  createReviewSection,
};
