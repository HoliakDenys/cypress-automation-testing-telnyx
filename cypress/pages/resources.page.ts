import BasePage from "./base.page";

export default class ResourcesPage extends BasePage {
    constructor() {
        super('resources');
    }

    getFilterLinkByName(filterName: string) {
        return cy.get(`a[href*="/resources/topic/${filterName.toLowerCase()}"]`);
    }

    selectFilterByName(filterName: string) {
        this.getFilterLinkByName(filterName)
            .click({ force: true });
    }

    getArticleByText(text: string) {
        return cy.contains('li', text);
    }

    checkFilterStateAfterReload(filterName: string) {
        this.getFilterLinkByName(filterName)
            .find('div')
            .should('have.attr', 'data-state', 'unchecked');
    }

    selectArticleByText(text: string) {
        this.getArticleByText(text).click();
    }

    selectLinkByText(text: string) {
        cy.contains('a', text).click({ force: true });
    }

    verifyElementInViewByText(headerText: string) {
        cy.contains('h2', headerText)
            .then(($el) => {
                const rect = $el[0].getBoundingClientRect();
                cy.wrap(rect.top).should('be.greaterThan', 0);
            });
        cy.scrollTo('top');
    }

    selectAndVerifyLinkByText(text: string) {
        this.selectLinkByText(text);
        this.verifyElementInViewByText(text);
    }
}
