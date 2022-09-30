import CONFIG from './config';

const IMAGE_ENDPOINT = {
  SMALL: `${CONFIG.BASE_IMAGE_URL}small/`,
  MEDIUM: `${CONFIG.BASE_IMAGE_URL}medium/`,
  LARGE: `${CONFIG.BASE_IMAGE_URL}large/`,
  AVATAR: (name) => `https://ui-avatars.com/api/?name=${name}`,
};

export default IMAGE_ENDPOINT;
