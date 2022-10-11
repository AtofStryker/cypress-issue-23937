// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

export const loginWithAzureAD = (username: string, password: string): void => {
  cy.origin(
    "https://login.microsoftonline.com",
    { args: { username, password } },
    ({ username, password }) => {
      cy.visit("/");
      // Set email and wait
      cy.get('[type="email"]').should("be.visible").type(username);
      cy.get('[type="submit"]').click();
      //cy.wait(3000);
      // Validation that the email input and progress bar do not exist
      cy.get('[type="email"]', { timeout: 5000 }).should("not.exist");
      cy.get("[class=progress]", { timeout: 5000 }).should("not.exist");
      // Set password and wait
      cy.get('[type="password"]', { timeout: 5000 })
        .should("be.visible")
        .type(password);
      cy.get('[type="submit"]').click();
      //cy.wait(2000);
      // Validation that the password input does not exist
      cy.get('[type="password"]', { timeout: 5000 }).should("not.exist");
    }
  );
};

Cypress.Commands.add("login", (session, { username, password } = {}) => {
  cy.session(session as string | string[] | object, () => {
    loginWithAzureAD(username, password);
    cy.visit("/");
  });
});
