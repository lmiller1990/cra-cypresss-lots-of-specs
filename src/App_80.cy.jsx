import App from "./App";

for (let j = 1; j < 10; j++) {
  it(`[${Cypress.spec.name}] Run #${j}: renders learn react link`, () => {
    cy.mount(<App />);
    cy.get("a").contains("React");
    for (let i = 1; i < 10; i++) {
      cy.get("button").click();
      cy.get("p").contains(i);
    }
  });
}
