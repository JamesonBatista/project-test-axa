//AXA Project
// import para funções usadas nos testes
import { title, testing, action, screenshot, generate_data } from '../../support/commands';

// title = describe
// testing = it
// action = cy.get

title('TC001 - Realizando teste no DemoAQ', function () {

    let login = {
        user: Cypress.env('login').user,
        pass: Cypress.env('login').pass
    }

    testing('Acessando URL', function () {
        cy.setupTest()
    });

    testing('UC001 - Acessando Elements e preenchendo formulário', function () {

        action({ atr: inspect.acess_element, text: 'action page', screenshots: false })
            .eq(0).click()
    });

});

export let inspect = {

    // user: 'id='nome_user'',
    acess_element: 'class="avatar mx-auto white"'

}
