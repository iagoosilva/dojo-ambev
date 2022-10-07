/// <reference types="cypress" />
import usuario from "../../fixtures/usuario.json"

describe('US: Tela de login', () => {

    beforeEach(() => {
        cy.visit('login')
        
    });

it('Realizar login com sucesso', () => {
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('henriqueiago777@gmail.com')
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('Teste@777')
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Iago Henrique e Silva')
    
});

it('Realizar login com Commands', () => {
    cy.login('email', 'senha')
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Iago Henrique e Silva')
    
});

it('Deve fazer login com sucesso - Massa de dados Fixture', () => {
    cy.fixture("usuario").then((user) =>{
        cy.login(user.email, user.senha)
    })
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Iago Henrique e Silva')
    
});

it('Deve fazer login com sucesso - Massa de dados com importação', () => {
    cy.login(usuario.email, usuario.senha)
    cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo Iago Henrique e Silva')
    
});
    
it('Realizar login incorreto', () => {
    cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('henriqueiago777@gmail.com')
    cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('Teste@7')
    cy.get('[data-test="login-submit"]').click()
    cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
});  
});








/* 
Funcionalidade: Tela de login 
Eu como usuario do coenxão QA
Quero fazer meu cadastro 
Para me conectar com outros QAs

Cenário: Login com sucesso
Arrage (Pré-condição) Dado que eu esteja na pagina de login
Act (Ação) Quando eu inserir os dados válidos
Assert (Resultado esperado) Então deve me direcionar para o dashboard
*/
