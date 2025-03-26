import ResourcesPage from "../pages/resources.page";

it('Validation of filter persistence in Resources tab after page reload', () => {
    const resourcesPage = new ResourcesPage();

    resourcesPage.open();
    resourcesPage.selectFilterByName("Networking");
    cy.reload();
    resourcesPage.checkFilterStateAfterReload("Networking");
})