/// <reference types="cypress" />

describe('Funcionalidade: Cadastro via API', () => {
let token
    beforeEach(() => {
        cy.token().then((tkn) =>{ token = tkn })

    })


    it('POST - Deve fazer um cadastro de um perfil com sucesso', () => {
       


        cy.request({
            method: 'POST',
            url: 'api/profile',
            headers: { Cookie : token },
            body: {
                company: "Ambev",
                status: "Qa junior",
                location: "MT",
                website: "https://swapi.dev/documentation",
                skills: "js",
                bio: "Eu sou Iago..",
                githubusername: "iagosilva",
                
              }
        }).then((response) => {
            expect(response.status).to.equal(200)
           
        })
    });
});