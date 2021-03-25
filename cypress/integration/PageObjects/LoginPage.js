class LoginPage
{
    visit()
    {
      cy.visit(Cypress.env('url'))
    }

    FillUsername(value)
    {
       const user=cy.get('[name=username]')
       user.clear()
       user.type(value)
       return this
    }

    FillPassword(value)
    {
       const pass=cy.get('[name=password]')
       pass.clear()
       pass.type(value)
       return this
    }

    submit()
    {
        const button=cy.get('[type=submit]')
        button.click()
    }
}

export default LoginPage