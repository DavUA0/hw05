/// <reference types="cypress" />

describe('filter tags', () => {
    before(() => {
      cy.visit('https://mil.am/en/news')
    })

    it('check the hashtags', () => {
        cy.get('a').contains('#Minister').click()
    })


    it('check the url', () => {
        cy.url().should('match', /maintags\/3/)
    })

    it('check the top green tag', () => {
        cy.get('.badge-top').each($entry =>{
            cy.wrap($entry)
            .should('contain', '#Minister')})
    })


})