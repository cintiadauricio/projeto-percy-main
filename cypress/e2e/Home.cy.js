describe("Teste snapshot Percy", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
  });
  it("Snapshot Home", () => {
    cy.customSnapshotTest();
  });
});
