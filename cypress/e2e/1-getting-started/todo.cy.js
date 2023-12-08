describe('TodoMVC', function() {
    beforeEach(function() {
      // Load our app before starting each test case
      Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
  });
      cy.visit('/')
    })
    it('Print Home Pague Menos', function() {
      cy.wait(10000)
      cy.scrollTo(0,500)
      cy.wait(10000)
      cy.percySnapshot('Homepage responsive test', { widths: [1440,1920]});
    })
})
