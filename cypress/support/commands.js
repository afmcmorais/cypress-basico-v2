Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('André')
    cy.get('#lastName').type('Felipe')
    cy.get('#email').type('afmcmorais@teste.com')
    cy.get('#open-text-area').type('Testando...')
    cy.contains('button', 'Enviar').click()
})