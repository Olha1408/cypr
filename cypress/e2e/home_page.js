// home-page.js

class HomePage {
    visit() {
      cy.visit('/login')
    }
  
    fillEmail(email) {
      cy.get('input[name="email"]').type(email)
    }
  
    fillPassword(password) {
      cy.get('input[name="password"]').type(password)
    }
  
    submitForm() {
      cy.get('button[type="submit"]').click()
    }
  
    assertErrorMessage(message) {
      cy.get('.error-message').should('contain', message)
    }
  }
  
  export default new HpmePage()