import BasePage from "./base.page";

export default class ResourcesPage extends BasePage {
    constructor() {
        super('resources');
    }

    getFilterLinkByName(filterName: string) {
        return cy.contains('div.c-hVqzKJ', filterName).closest('a');
    }

    selectFilterByName(filterName: string) {
        this.getFilterLinkByName(filterName)
            .click({ force: true });
    }

    checkFilterStateAfterReload(filterName: string) {
        this.getFilterLinkByName(filterName)
            .find('div.c-mWqCo')
            .should('have.attr', 'data-state', 'unchecked');
    }

    getArticleByText(text: string) {
        return cy.contains('li.c-eornxU', text);
    }

    selectArticleByText(text: string) {
        this.getArticleByText(text).first().click();
    }

    getResourceContainer() {
        return cy.get('.c-hUvmFm');
    }

    selectLinkByText(text: string) {
        this.getResourceContainer().contains('a', text).click({ force: true });
    }

    verifyElementInViewByText(headerText: string) {
        cy.contains('.c-fKwEGa', headerText)
            .then(($el) => {
                const rect = $el[0].getBoundingClientRect();
                cy.wrap(rect.top).should('be.greaterThan', 0);
            });
        cy.scrollTo('top');
    }
}
