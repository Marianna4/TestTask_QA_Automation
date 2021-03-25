describe('Test task',() => {  
    it('Open page', () => {
        cy.visit(Cypress.env('url'))
    })

    it('Sing in',() => {
        cy.get('input[type="text"]').type(Cypress.env('username'))
        cy.get('input[type="password"]').type(Cypress.env('userpassword'))
        cy.get('.btn').contains(Cypress.env('submitbtn')).should('be.visible').click()
    })
})