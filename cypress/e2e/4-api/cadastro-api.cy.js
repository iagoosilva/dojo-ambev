/// <reference types="cypress" />

describe('Funcionalidade: Cadastro via API', () => {

    it('POST - Deve fazer um cadastro com sucesso', () => {
        let email = `iago${Math.floor(Math.random() * 100000000)}@dojo.com`


        cy.request({
            method: 'POST',
            url: 'api/users',
            body: {
                "name": "Iago API",
                "email": email,
                "password": "teste@123"
              }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).lessThan(500)
        })
    });
});