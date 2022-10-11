describe('Test Azure AD Authentication with origin', () => {
  // beforeEach(function () {
  //   //In a real scenario here we place the cy.loginAzureADwithOrigin command
  //   //The login will cache the cookies and local storage
  // });

  it.skip('Direct login with the exported cridentials', () => {
    cy.login('ad');
    cy.visit('/');
    cy.get('[data-testid="search-icon"]').should('exist');
  });

  it('Direct login with the exported cridentials and custom session id', () => {
    cy.login('ad', {
      username: 'test_user'
    });
    cy.visit('/');
    cy.get('[data-testid="search-icon"]').should('exist');
  });

  it('Custom login with credentials in array, and unique session id', () => {
    cy.login('ad', {
      username: Cypress.env('username'),
      password: Cypress.env('password'),
    });
    cy.visit('/');
    cy.get('[data-testid="search-icon"]').should('exist');
  });

  it('Custom login with credentials in object, and unique session id', () => {
    cy.login('ad', {
      username: Cypress.env('username'),
      password: Cypress.env('password'),
    });
    cy.visit('/');
    cy.get('[data-testid="search-icon"]').should('exist');
  });
});