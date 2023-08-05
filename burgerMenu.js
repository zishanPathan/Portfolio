const CSS_CLASSES = Object.freeze({
  MENU_LINKS_DIV: 'menu-links',
  HAMBURGER_ICON_DIV: 'hamburger-icon',
  HAMBURGER_MENU: 'hamburger-menu',
  OPEN_MENU: 'open',
});

class BurgerMenu {
  /** @type {HTMLDivElement} */
  menu;
  /** @type {HTMLDivElement} */
  icon;
  constructor() {
    this.menu = document.querySelector(`.${CSS_CLASSES.MENU_LINKS_DIV}`);
    this.icon = document.querySelector(`.${CSS_CLASSES.HAMBURGER_ICON_DIV}`);

    window.addEventListener('click', this.#onBlurListener.bind(this));
  }
  
  /**
   * Describes if the burger menu is open.
   * @returns {boolean}
  */
  isOpen() {
    return this.menu.classList.contains(CSS_CLASSES.OPEN_MENU);
  }

  /** Method used to open the burger menu. */
  open() {
    this.menu.classList.add(CSS_CLASSES.OPEN_MENU)
    this.menu.classList.add(CSS_CLASSES.OPEN_MENU)
  }
  
  /** Method used to close the burger menu. */
  close() {
    this.menu.classList.remove(CSS_CLASSES.OPEN_MENU);
    this.icon.classList.remove(CSS_CLASSES.OPEN_MENU);
  }
  
  /** Method used to toggle the burger menu open/closed state. */
  toggle() {
    if (this.isOpen()) return this.close();
    this.open();
  }
  
  /**
   * Callback used to close the burger menu when users clicks outside of it.
   * By default when something inside the menu is clicked, the menu remains open.
   * It allows for nesting of inputs and buttons with custom logic.
   * @param {MouseEvent} event
   */
  #onBlurListener(event) {
    const menuLinksDiv = event.composedPath().find(element => element.classList?.contains(CSS_CLASSES.HAMBURGER_MENU));
    if (!menuLinksDiv) return this.close();
  }
};

var burgerMenu = new BurgerMenu();