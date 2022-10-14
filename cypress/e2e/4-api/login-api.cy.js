/// <reference types="cypress" />

describe('Funcionalidade: Login via API', () => {

    it('POST - Deve fazer um login com sucesso', () => {

        cy.request({
            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "henriqueiago777@gmail.com",
                "password": "Teste@777"
              }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).lessThan(500)
        })
    });
});