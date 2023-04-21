describe('check homepage', () => {
    beforeEach(() => {
      cy.visit('https://main.d1x2qkj1775i8z.amplifyapp.com/')
    })
    
    it('displays correct h1 header', () => {
        cy.get('h1').contains('SHOP OUR FEATURED PRODUCTS')
    })
})
