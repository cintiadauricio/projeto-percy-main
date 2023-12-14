import "@percy/cypress";
import "./commands";

Cypress.on("uncaught:exception", () => {
  return false;
});

before(() => {
  cy.session("preserveOnce", () => {
    cy.setCookie("cookieconsent_status", "dismiss");
  });
});
