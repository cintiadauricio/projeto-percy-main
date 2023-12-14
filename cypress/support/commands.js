import "@percy/cypress";
const homePage = require("./page_elements/home_page");
const homePg = new homePage();

Cypress.Commands.add("customSnapshotTest", () => {
  cy.window().then((win) => {
    cy.get(homePg.img_home_logo).should("be.visible");
  });
  cy.scrollTo("bottom", { duration: 6000 });
  cy.scrollTo("top", { duration: 6000 });
  cy.scrollTo("bottom", { duration: 6000 });
  cy.percySnapshot();
});
