///<reference types = "cypress"/>
describe('verify the login function',function(){

    it.only('verify with valid credentials',function(){
  
         let baseurlF = Cypress.config().baseUrl
        //let extmout = Cypress.config()['execTimeout']
        //cy.log(baseurlF)
        //cy.log(extmout)
         cy.visit(baseurlF)

    })
    it('verify the forgot password link',function(){
        cy.visit('/requestPasswordResetCode')

    })


})