describe("Should be able to visit the application and render all expected elements", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should confirm that true is equal to true", () => {
    expect(true).to.equal(true);
  });
  it("Should render expected landing page elements", () => {
    cy.get("h1")
      .contains("URL Shortener")
      .get("form")
      .should("be.visible")
      .get("div.url")
      .should("be.visible");
  });
  it("Should render 2 inputs and a submit button", () => {
    cy.get("form")
      .should("be.visible")
      .get("input.title-input")
      .should("be.visible")
      .get("input.url-input")
      .should("be.visible")
      .get("button")
      .should("be.visible");
  });
  it("Should be able to fill out the form and submit it to the page", () => {
    cy.get("form")
      .should("be.visible")
      .get("input.title-input")
      .type("Cypress")
      .get("input.url-input")
      .type("https://docs.cypress.io/api/commands/type#Syntax")
      .get("button")
      .click()
      .get("div.url")
      .last()
      .contains("http://localhost:3001/useshorturl/17");
  });
});
