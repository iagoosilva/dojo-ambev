/// <reference types="cypress" />
const faker = require('faker-br');

describe('US: Tela de login', () => {

    beforeEach(() => {
        cy.visit('cadastrar')
        
    });
it('US: Cadastro', () => {
    let name = faker.name.findName()
    let email = faker.internet.email(name)

    cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(name)
    cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
    cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('Iago123')
    cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('Iago123')
    cy.get('[data-test="register-submit"]').click()
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + name)
    
});
});