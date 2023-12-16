import "@percy/cypress";
const homePage = require("./page_elements/home_page");
const homePg = new homePage();

Cypress.Commands.add("customSnapshotTest", () => {
  cy.window().then((win) => {
    cy.get(homePg.img_home_logo).should("be.visible");
    cy.get(homePg.slaider_track).should("be.visible");
  });
  cy.scrollTo("bottom", { duration: 7000 });
  cy.scrollTo("top", { duration: 7000 });
  cy.scrollTo("bottom", { duration: 7000 });
  cy.scrollTo("top", { duration: 7000 });
  cy.get(homePg.label_ver)
    .should("be.visible")
    .should("exist")
    .should("contain.text", "Ver mais");
  cy.get(homePg.label_add)
    .should("be.visible")
    .should("exist")
    .should("contain.text", "Adicionar");
  cy.get(homePg.home)
    .should("be.visible")
    .should("exist")
    .should("contain.text", "Adicionar");
  cy.percySnapshot("Home responsive test", { widths: [1440, 1920] });
});
