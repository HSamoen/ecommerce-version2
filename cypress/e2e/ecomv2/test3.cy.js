describe('Checks active link on the homepage', () => {
    beforeEach(() => {
      cy.visit('https://main.d1x2qkj1775i8z.amplifyapp.com/')
    })
    it('clicks the link "View All"', () => {
      cy.contains('View All').click()
  })
  })