describe("Should be able to visit the application and render all expected elements", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should confirm that true is equal to true", () => {
    cy.visit("http://localhost:3000");
    expect(true).to.equal(true);
  });
  it("Should render expected landing page elements", () => {
    cy.visit("http://localhost:3000")
      .get("h1")
      .contains("URL Shortener")
      .get("form")
      .should("be.visible")
      .get("div.url")
      .should("be.visible");
  });
  it("Should render 2 inputs and a submit button", () => {
    cy.visit("http://localhost:3000")
      .get("form")
      .should("be.visible")
      .get("input.title-input")
      .should("be.visible")
      .get("input.url-input")
      .should("be.visible")
      .get("button")
      .should("be.visible");
  });
  it("Should be able to fill out the form see typed responses in input boxes", () => {
    cy.visit("http://localhost:3000")
      .get("form")
      .should("be.visible")
      .get("input.title-input")
      .type("Cypress")
      .get("input.title-input")
      .should("have.value", "Cypress")
      .get("input.url-input")
      .type("https://docs.cypress.io/api/commands/type#Syntax")
      .get("input.url-input")
      .should("have.value", "https://docs.cypress.io/api/commands/type#Syntax");
  });
  it.only("Should be able to fill out the form and submit it to the page", () => {
    cy.visit("http://localhost:3000")
      .get("form")
      .should("be.visible")
      .get("input.title-input")
      .type("Cypress")
      .get("input.title-input")
      .get("input.url-input")
      .type("https://docs.cypress.io/api/commands/type#Syntax")
      .get("input.url-input")
      .get("button.shorten")
      .click()
      .intercept("POST", "http://localhost:3001/api/v1/urls", {
        statusCode: 201,
        body: {
          id: 20,
          long_url: "https://docs.cypress.io/api/commands/type#Syntax",
          short_url: `http://localhost:3001/useshorturl/22`,
          title: "Cypress",
        },
      })
      .get("div.url")
      .last()
      .contains(`http://localhost:3001/useshorturl/22`);
  });
});
