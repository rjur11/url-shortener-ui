describe("Should be able to visit the application and render all expected elements", () => {
  it("Should confirm that true is equal to true", () => {
    expect(true).to.equal(true);
  });
  it("Should stub the api get request to produce error page", () => {
    cy.visit("http://localhost:3001/api/v1/urls");
    cy.intercept({
      method: "GET",
      url: "http://localhost:3001/api/v1/urls1",
    });
  });
});
