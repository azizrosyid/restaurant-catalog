const UrlParser = {
  parseActiveUrl() {
    const hash = window.location.hash.slice(2);

    // check for search url
    if (hash.slice(0, 7) === '?search') {
      return '/?search';
    }

    const splittedHash = this._splitter(hash);
    return this._combiner(splittedHash);
  },

  getIdFromUrl() {
    const hash = window.location.hash.slice(2);

    return this._splitter(hash).id;
  },

  _splitter(hash) {
    const splittedHash = hash.split('/');
    return {
      resource: splittedHash[0] || null,
      id: splittedHash[1] || null,
    };
  },

  _combiner(splittedHash) {
    return (splittedHash.resource ? `/${splittedHash.resource}` : '/') + (splittedHash.id ? '/:id' : '');
  },
};

export default UrlParser;
