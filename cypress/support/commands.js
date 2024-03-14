// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
export { testing, title, action, screenshot, generate_data } from "./supports";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('setupTest', (env = "url") => {
    const url = Cypress.env(Cypress.env("run"))[env];
    cy.exec('dir cypress\\screenshots', { failOnNonZeroExit: false, log: false }).then(result => {
        if (Cypress.config('isInteractive')) {
            if (result.code === 0) {
                cy.exec('rmdir /s /q "cypress/screenshots"', { log: false });
            }
        }
    });
    visit(url)
});

function visit(url) {
    cy.clearAllCookies({ log: false })
    cy.clearAllLocalStorage({ log: false })
    cy.clearAllSessionStorage({ log: false })
    cy.visit(url, {
        onBeforeLoad: (win) => {
            win.localStorage.clear();
            win.sessionStorage.clear();
        },
        failOnStatusCode: false
    }).wait(10000, { log: false })
        .then((location) => {
            cy.document({ log: false }).then((doc) => {
                const element_gti = doc.querySelectorAll('[class="category-cards"]')
                if (element_gti.length <= 0) {
                    cy.clearAllCookies({ log: false })
                    cy.clearAllLocalStorage({ log: false })
                    cy.clearAllSessionStorage({ log: false })
                    cy.step('active reload...').reload();
                    cy.wait(10000, { log: false })
                }
            })
        });
}