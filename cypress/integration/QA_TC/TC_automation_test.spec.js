import LoginPage from '../PageObjects/LoginPage'

describe('Test task',() => {  
    it('Open page', () => {
        cy.visit(Cypress.env('url'))
    })

    it('Sing in',() => {
        cy.fixture('userLogValues').then((user)=>{
            cy.get('input[type="text"]').type(user.username)
            cy.get('input[type="password"]').type(user.userpassword)
        })        
        cy.get('.btn').contains(Cypress.env('submitbtn')).should('be.visible').click()
    })

    it('Verify elements',() => {
        cy.get('[id="all"]').should(($all)=>{
           expect($all).to.exist
        })
        
        cy.get('.wrapper')             
        .should('contain.html','img')
        .and('contain.text','QA Portal Login')
        .and('include.html','form')  
                
        cy.get('form')
        .find('input').should('be.visible')
        .should('have.class','btn-success')  
        
        
        cy.get('.has-error').then(($er) => {
            const cls = $er.attr('class')          
            cy.wrap($er).should('not.be.empty')
        })
    })
  /*
    it('Check error messages', () => {
        cy.get('.help-block').contains('No account found with that username.')


    })
*/
    it('Failed test',()=>{
        cy.title().should('not.eq','Login')
    })

    it('Valid Page Object pattern', ()=>{
        const logP=new LoginPage()
        logP.visit()
        cy.fixture('userLogValues').then((user)=>{
            logP.FillUsername(user.username)
            logP.FillPassword(user.userpassword)
        })
       logP.submit()
    })
})