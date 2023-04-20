/// <reference types="cypress" />


describe('Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Login com credenciais incorretas (login malsucedido)', () => {
    const user = 'gabriel'
    const pass = 'willians'
    cy.get('[id=user-name]').type(`${user}`)
    cy.get('[id=password]').type(`${pass}{enter}`)
    cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Login com credenciais corretas (login bem-sucedido)', () => {
    const user = 'standard_user'
    const pass = 'secret_sauce'
    cy.get('[id=user-name]').type(`${user}`)
    cy.get('[id=password]').type(`${pass}{enter}`)
    cy.get('[class=title]').should('have.text', 'Products')
  })

  it('Adicionando 2 itens ao carrinho e finalizando compra', () => {
    const user = 'standard_user'
    const pass = 'secret_sauce'
    const firstName = 'Gabriel'
    const lastName = 'Willians'
    const postalCode = '38412036'

    cy.get('[id=user-name]').type(`${user}`)
    cy.get('[id=password]').type(`${pass}{enter}`)
    cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click()
    cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click()
    cy.get('[class=shopping_cart_link]').click()
    cy.get('[class=shopping_cart_link]').click()
    cy.get('[id=checkout]').click()
    cy.get('[data-test=firstName]').type(`${firstName}`)
    cy.get('[data-test=lastName]').type(`${lastName}`)
    cy.get('[data-test=postalCode]').type(`${postalCode}`)
    cy.get('[data-test=continue]').click()
    cy.get('[class=title]').should('have.text', 'Checkout: Overview')
    cy.get('[data-test=finish]').click()
    cy.get('[class=complete-header]').should('have.text', 'Thank you for your order!')
    cy.wait(21000)
  })
})