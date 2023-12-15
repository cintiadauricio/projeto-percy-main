
describe('PLP', function() {
  beforeEach(function() {
         Cypress.on('uncaught:exception', (err, runnable) => {
     return false;
});
  //cy.setCookie('VtexIdclientAuthCookie','eyJhbGciOiJFUzI1NiIsImtpZCI6IkFFOTgyNjc3QzVGNTgyRkMxMTRCQTNBMERENEQwMDdERUI0NjczOUIiLCJ0eXAiOiJqd3QifQ.eyJzdWIiOiJjaW50aWEuZGF1cmljaW9AYWNjdC5nbG9iYWwiLCJhY2NvdW50IjoicGFndWVtZW5vcyIsImF1ZGllbmNlIjoid2Vic3RvcmUiLCJzZXNzIjoiNGIwYjk4NmMtY2UxOC00OTk3LTgyYWMtMGMwZDNkZDhmZmUyIiwiZXhwIjoxNzAyNTU5NjczLCJ1c2VySWQiOiJhMzExNWZlYS05MzY1LTQ4OTktYTkyNy05MTFlZDI5ZjA1M2EiLCJpYXQiOjE3MDI0NzMyNzMsImlzcyI6InRva2VuLWVtaXR0ZXIiLCJqdGkiOiIzMzE2MGQ4OC00NDNkLTQzNmItOGRjZi02MmYwODBkMzcwYTYifQ.ySemvzkb1-FOvDtrXy5_ezYXz8vBW1XVpXLZk8sJPCYdk0q4kH0M8IqoxN9i6-G1J4G7t2t8dz7_o-qK-8retg')
       cy.visit('https://www.paguemenos.com.br/landing-page-ame')
  })
  it('Print PLP', function() {
    cy.wait(10000)
    cy.scrollTo('bottom')
    cy.wait(10000)
    cy.get('#dm876A').click()
    cy.scrollTo('bottom')
    cy.wait(5000)
    cy.percySnapshot('PLP responsive test', { widths: [1440,1920]});
  });
})
