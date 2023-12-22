// https://docs.cypress.io/api/table-of-contents

describe('Calculator', () => {

  it('la calculatrice me permet de faire des additions', () => {
    cy.visit('http://localhost:4173/')
    cy.contains('1').click()
    cy.contains('7').click()
    cy.contains('+').click()
    cy.contains('5').click()
    cy.contains('=').click()
    cy.get('.output').contains('22')
  })
  it('la calculatrice me permet de faire des Soustraction', () => {
    cy.visit('http://localhost:4173/')

    cy.contains('9').click()
    cy.contains('-').click()
    cy.contains('2').click()
    cy.contains('=').click()
    cy.get('.output').contains('7')
  })
  it('la calculatrice me permet de faire des division', () => {
    cy.visit('http://localhost:4173/')

    cy.contains('6').click()
    cy.contains('/').click()
    cy.contains('2').click()
    cy.contains('=').click()
    cy.get('.output').contains('3')
  })
  it('la calculatrice me permet de faire des multiplication', () => {
    cy.visit('http://localhost:4173/')

    cy.contains('6').click()
    cy.contains('x').click()
    cy.contains('2').click()
    cy.contains('=').click()
    cy.get('.output').contains('12')
  })
  it('la calculatrice me permet d enlever un chiffre', () => {
    cy.visit('http://localhost:4173/')

    cy.contains('6').click()
    cy.contains('2').click()
    cy.contains('DEL').click()
    cy.get('.output').contains('6')
  })
  it('la calculatrice me permet de supprimer la valeur afficher', () => {
    cy.visit('http://localhost:4173/')

    cy.contains('6').click()
    cy.contains('/').click()
    cy.contains('2').click()
    cy.contains('=').click()
    cy.get('.output').contains('3')
    cy.contains('AC').click()
    cy.get('.output').contains('0')
  })
})
