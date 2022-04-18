//estrutura de identificação do cypress
///<reference types="cypress"/> 

//describe principal
describe("Acessar o site",()=>{
    before( ()=> {
        cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html")
    })
    describe('',()=>{
        it('Manoela',()=>{ //it é toda a massa de testes do meu scritp

        })
    })
} )

//Fonte para dados deste primeiro contato com a ferramenta: https://www.youtube.com/watch?v=HW8DZD2o68w&list=PLj4L5Gc8F2CEsJ1L71KfWGLGDRTEl9MJi&index=1