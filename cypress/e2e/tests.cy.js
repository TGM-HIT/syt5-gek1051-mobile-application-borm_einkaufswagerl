describe('Mark item as bought', function () {

  it('Should create a new item and mark it as bought', function () {
    cy.visit('127.0.0.1:8081');


    const listName = 'Getränke';
    const itemName = 'Cola';

    cy.get('#addNewList').click();
    cy.get('#listName').type(listName);
    cy.get('#addList').click();

    // Wait for the new list to be added to the DOM
    cy.contains('.main-content', listName, { timeout: 10000 }).should('exist');

    // Click the list item addShoppingListItem button
    cy.get('.main-content').contains(listName).parent().parent().
      find('#addShoppingListItem').click();

    // Type the item name 
    cy.get('.main-content').find('#newItemName').type(itemName);

    // Click the add button
    cy.get('.main-content').find('#addToCart').click();

    // Check that the item is added to the list
    cy.get('.main-content').contains(itemName).should('exist');

    // Mark the item as marked and check that it is marked
    cy.get('.main-content').contains(itemName).parent().parent().
      find('input[type="checkbox"]').
      scrollIntoView().
      check({ force: true }).
      should('have.value', 'true');
  });
});
