const DrawerInitiator = {
  init({
    button, drawer, jumbotron, catalog,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);

      this._changeStateButton(drawer, button);
    });

    [jumbotron, catalog].forEach((element) => {
      element.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);

        this._changeStateButton(drawer, button);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
  _changeIcon(drawerIsOpen, button) {
    button.textContent = drawerIsOpen ? '✖' : '☰';
  },
  _changeAriaLabel(drawerIsOpen, button) {
    const ariaText = drawerIsOpen ? 'Close' : 'Open';
    button.setAttribute('aria-label', `${ariaText} Navigation bar`);
  },
  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
  _changeStateButton(drawer, button) {
    const drawerIsOpen = drawer.classList.contains('open');
    this._changeIcon(drawerIsOpen, button);
    this._changeAriaLabel(drawerIsOpen, button);
  },
};

export default DrawerInitiator;
