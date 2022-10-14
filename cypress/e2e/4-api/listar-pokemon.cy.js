/// <reference types="cypress" />

describe('Funcionalidade: Listar Pokemon', () => {

    it('GET - Deve listar o pokemon Ditto com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'


        }).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.abilities[0].ability.name).to.equal('limber')
        })
        
});

it('GET - Deve listar o pokemon Pikachu com sucesso', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then((resp) =>{
        expect(resp.status).eq(200)
    })
});
});