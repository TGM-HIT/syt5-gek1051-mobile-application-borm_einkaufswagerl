// Starts local server
describe('template spec', () => {
  it('should toggle checkbox state to true on click', () => {
    // Replace YOUR_PAGE_URL with the URL of the page you're testing
    cy.visit('127.0.0.1:8081');

    // Assuming clicking the checkbox toggles its state,
    // and that it was initially unchecked.
    // First, ensure the checkbox is not checked.
    cy.get('div.md-checkbox-container')
      .should('not.be.checked');

    // Click the checkbox or button
    cy.get('div.md-checkbox-container').click();

    // Assert the checkbox is now checked
    cy.get('md-checkbox-container')
      .should('be.checked');
  });
})
