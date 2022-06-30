import App from "./App";

it(`[${Cypress.spec.name}]: renders learn react link`, () => {
  cy.mount(<App />);
  cy.get("a").contains("React");
  for (let i = 1; i < 10; i++) {
    cy.get("button").click();
    cy.get("p").contains(i);
  }
});

