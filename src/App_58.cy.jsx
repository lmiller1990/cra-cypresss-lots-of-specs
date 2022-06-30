import App from "./App";
import { mount } from "@cypress/react";

it(`[${Cypress.spec.name}]: renders learn react link`, () => {
  mount(<App />);
  cy.get("a").contains("React");
  for (let i = 1; i < 10; i++) {
    cy.get("button").click();
    cy.get("p").contains(i);
  }
});

