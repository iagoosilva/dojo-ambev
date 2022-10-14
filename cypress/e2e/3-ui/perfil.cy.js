/// <reference types="cypress" />
import usuario from "../../fixtures/usuario.json"

describe('US: Tela de login', () => {

    before(() => {
        cy.visit('login')
        
    });

it('Realizar login com Commands', () => {
    cy.login('email', 'senha')
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Iago Henrique e Silva')
    
});

it('Criar perfil', () => {
    cy.get('[data-test="dashboard-createProfile"]').click()
    cy.get('#mui-component-select-status').click()
    cy.get('[data-test="status-1"]').click()
    cy.get('[data-test="profile-company"] > .MuiInputBase-root > .MuiInputBase-input').type('Ambev Tech')
    cy.get('[data-test="profile-webSite"] > .MuiInputBase-root > .MuiInputBase-input').type('https://www.ambevtech.com.br/')
    cy.get('[data-test="profile-location"] > .MuiInputBase-root > .MuiInputBase-input').type('Cuiabá - MT')
    cy.get('[data-test="profile-skills"] > .MuiInputBase-root > .MuiInputBase-input').type('Testes de Integração, Automação de Testes, Cypress, Testes Manuais')
    cy.get('[data-test="profile-gitHub"] > .MuiInputBase-root > .MuiInputBase-input').type('https://github.com/iagoosilva')
    cy.get('[rows="1"]').type('Me chamo Iago...')
    cy.get('[data-test="profile-submit"]').click()
});
});