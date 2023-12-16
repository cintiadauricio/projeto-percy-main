class homePage {
  constructor() {
    this.img_home_logo = ".vtex-store-components-3-x-logoImage";
    this.slaider_track = '[data-testid="slider-track"]';
    this.label_ver =
      ".vtex-store-link-0-x-link.vtex-store-link-0-x-link--product-page";
    this.label_add =
      '.vtex-flex-layout-0-x-flexRowContent--new-home-shelf-1 > :nth-child(1) > :nth-child(1) > :nth-child(2) > .vtex-slider-layout-0-x-sliderLayoutContainer > .vtex-slider-layout-0-x-sliderTrackContainer > [data-testid="slider-track"] > [aria-label="3 of 10"] > .vtex-slider-layout-0-x-slideChildrenContainer > .vtex-product-summary-2-x-container > .vtex-product-summary-2-x-clearLink > .vtex-product-summary-2-x-element > :nth-child(5) > .vtex-flex-layout-0-x-flexRow > .mt0 > .pr0 > .paguemenos-store-theme-2-x-containerAddCartButton > .vtex-button > .vtex-button__label';
    this.home = ".vtex-flex-layout-0-x-flexRow--new-home-container";
  }
}

module.exports = homePage;
