import "@percy/cypress";
import "cypress-plugin-xhr-toggle";
import "./commands";

Cypress.on("uncaught:exception", () => {
  return false;
});

before(() => {
  cy.setCookie("cookieconsent_status", "dismiss");
  cy.setCookie("fb_cookieconsent_status", "dismiss");
  cy.setCookie("_tt_enable_cookie", "1");
});
