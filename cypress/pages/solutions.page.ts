import BasePage from "./base.page";

export default class SolutionsPage extends BasePage {
    constructor() {
        super('solutions');
    }

    getSearchField() {
        return cy.get('#search');
    }

    getSolutionsArticles() {
        return cy.get('.c-cmpvrW');
    }

    getNoResultsMessage() {
        return cy.get('.c-PJLV-ealYFu-lead-false').contains('No results for this filter');
    }

    enterSearchField(query: string) {
        this.getSearchField()
            .clear()
            .type(`${query}{enter}`);

        cy.wait(500);
    }
    
    validateArticlesContainSearchText(query: string) {
        this.getSolutionsArticles().each(($el) => {
            cy.wrap($el)
                .find('h3.c-rMlRu')
                .should('exist')
                .should('be.visible')
                .then(() => {
                    cy.wrap($el).find('h3.c-rMlRu').should('include.text', query);
                });
        });
    }
}