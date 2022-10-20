/// <reference types="cypress" />

import comentario from "../../fixtures/comentario.json"
describe('Funcionalidade: Criar post via API', () => {
    let token
        beforeEach(() => {
            cy.token().then((tkn) =>{ token = tkn })
    
        })
    
    
        it('POST - Deve criar post com sucesso', () => {
           
    
    
            cy.request({
                method: 'POST',
                url: 'api/posts',
                headers: { Cookie : token },
                body: comentario
            }).then((response) => {
                expect(response.status).to.equal(201)
                expect(response.duration).lessThan(500)
                
               
            })
        });
    });