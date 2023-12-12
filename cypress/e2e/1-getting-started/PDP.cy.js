describe('TodoMVC', function() {
    beforeEach(function() {
      // Load our app before starting each test case
      Cypress.on('uncaught:exception', (err, runnable) => {
       return false;
  });
    cy.setCookie('VtexIdclientAuthCookie','eyJhbGciOiJFUzI1NiIsImtpZCI6IjA5MDFGMjMwNTY2RjdFNDhDRjk4MTRCNjI1M0FEOTQ2QzU5ODA5OEMiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJjaW50aWEuZGF1cmljaW9AYWNjdC5nbG9iYWwiLCJhY2NvdW50IjoicGFndWVtZW5vcyIsImF1ZGllbmNlIjoid2Vic3RvcmUiLCJzZXNzIjoiMTBmYjM4ZjEtMzhjNC00M2QwLWIyZDgtOTc3ZWY0YjAwMmRmIiwiZXhwIjoxNzAyMzgwMTUwLCJ1c2VySWQiOiJhMzExNWZlYS05MzY1LTQ4OTktYTkyNy05MTFlZDI5ZjA1M2EiLCJpYXQiOjE3MDIyOTM3NTAsImlzcyI6InRva2VuLWVtaXR0ZXIiLCJqdGkiOiIxY2VjYzg2MC1hMTI3LTQ1NmQtOTU4ZS01ZjNlMGQ4MDgzMmYifQ.B8mdI5Yn57xghRTVhXfiEWlvU4HbzLVlf_sM0qu8tyB_rQQXGXQQLxY-8yyDB2dF_tpQ5RYWN9VzJGhNrfeI5g')
   cy.visit('https://www.paguemenos.com.br/fralda-huggies-suprecare-hiper-tamanho-g-com-66-unidades/p')
    })
    it('Print PDP', function() {
      cy.wait(10000)
      cy.scrollTo('bottom')
      cy.get('#dm876A').click()
      cy.wait(10000)
      cy.scrollTo('bottom')
      cy.wait(5000)
      //cy.percySnapshot('PDP responsive test', { widths: [1440,1920]});
    });

})

