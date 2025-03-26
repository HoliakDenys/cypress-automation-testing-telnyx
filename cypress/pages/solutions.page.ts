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
    }

    getArticleTitle(article: JQuery<HTMLElement>) {
        return cy.wrap(article).find('h3.c-rMlRu');
    }    

    validateArticlesContainSearchText(query: string) {
        this.getSolutionsArticles().each(($el) => {
            this.getArticleTitle($el).should('include.text', query);
        });
    }
}