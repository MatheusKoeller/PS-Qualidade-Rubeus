/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora erros de js do site, assim quebrando os teste com commands
    return false
});

describe('Formulario para capturar email', () => {

    it('Deve liberar o botão AVANÇAR', () => {
        cy.visitForm();
        cy.fillName('Matheus Mação');
        cy.fillPhone('15999999999');
        cy.fillEmail('a2@w2.dd');
        cy.clickNext();
        cy.checkToastMessage('É necessário informar a base legal');

        // A mensagem de "base legal" é usada aqui apenas para validar que o botão "Avançar"
        // foi habilitado e que a ação de clique foi executada com sucesso.
    });

    it('Não deve avançar com email inválido', () => {
        cy.visitForm();
        cy.fillName('Matheus Mação');
        cy.fillPhone('15999999999');
        cy.fillEmail('emailinvalido');
        cy.checkEmailValidation('Preencha este campo');

        // vimos aqui que o campo de email tem uma validação , que exibe a mensagem "Preencha este campo" quando o formato do email é inválido.
    });

    it('Não deve avançar sem nome', () => {
        cy.visitForm();
        cy.fillPhone('15999999999');
        cy.fillEmail('a2@w2.dd');
        cy.clickNext();
        cy.checkToastMessage('É necessário informar a base legal');

        // Encontramos um erro aqui. Esta avançando mesmo com o nome vazio
    });

    it('Não deve avançar sem telefone', () => {
        cy.visitForm();
        cy.fillName('Matheus Mação');
        cy.fillEmail('a2@w2.dd');
        cy.clickNext();
        cy.checkToastMessage('É necessário informar a base legal');

        // Encontramos um erro aqui. Esta avançando mesmo com o telefone vazio
    });

    describe('Validação do botão Avançar', () => {

        it('Botão deve iniciar desabilitado', () => {
            cy.visitForm();
            cy.checkButtonDisabled();
        });

        it('Botão deve habilitar após preencher email', () => {
            cy.visitForm();
            cy.fillEmail('a2@w2.dd');
            cy.checkButtonEnabled();

            // Por algum motivo o cypress n consegue fazer o click no botão tendo apenas o email preenchido,
            // mesmo que o botão esteja habilitado. 
            // O teste acima é para mostrar que o botão AVANÇAR só é habilitado quando o email é preenchido, mas o clique não funciona.
        });

    });

});