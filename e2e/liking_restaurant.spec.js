const assert = require('assert');

Feature('liking restaurant');

Scenario('Unliking one restaurants', async ({ I }) => {
  I.amOnPage('https://www.blibli.com/');
  pause();
});
