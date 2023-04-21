describe('Checks correct url to products page', () => {
    it('clicking "Products" navigates to a new url', () => {
      cy.visit('https://main.d1x2qkj1775i8z.amplifyapp.com/')
  
      cy.contains('Products').click()
  
      // Should be on a new URL which
      // includes '/products'
      cy.url().should('include', '/products')
    })
  })