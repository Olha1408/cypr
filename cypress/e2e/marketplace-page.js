class MarketplacePage {
    visit() {
      cy.visit('https://allo.ua/ua')
    }
  
    assertUrl() {
    cy.url().should('include', 'allo.ua')


    }
   
    selectCategory(categoryName) {
        cy.contains(categoryName).click()
      }

    addSamsungPhoneToBasket() {
        cy.get('.product-title').contains('Samsung')
          .siblings('.product-buy')
          .contains('Купити')
          .click()
      }
  
    selectSubcategory(subcategoryName) {
      cy.contains(subcategoryName).click()
    }
  
  }
  
  export default new MarketplacePage()