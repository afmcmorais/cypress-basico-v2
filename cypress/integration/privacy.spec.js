Cypress._.times(5, function() {
    it('Testa a página da políica de privacidade de forma independente', function() {
        cy.visit('./src/privacy.html')
    
        cy.contains('Talking About Testing').should('be.visible')
    })
})