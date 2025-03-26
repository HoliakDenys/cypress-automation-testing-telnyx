import BasePage from "./base.page";

export default class GlobalCoveragePage extends BasePage {
    
    constructor() {
        super('globalCoverage');
    }

    getNumberTypesButton() {
        return cy.get('.c-bHRSJu').contains("Number types");
    }
    
    getSearchCountryButton() {
        return cy.get('button').contains('Search country');
    }

    getFilterSelectedButton() {
        return cy.contains('span', '1 filter selected').closest('button');
    }

    getCoverageTableNumberTypesTab() {
        return cy.get('#accordion');
    }

    getNumberTypesField() {
        return cy.get('c-hOquJL');
    }

    clickNumberTypesButton(): void {
        this.getNumberTypesButton().click({force: true});
    }

    selectCountryFromDropdown(countryName: string): void {
        this.getSearchCountryButton().click();
        const countryCheckboxSelector = `div[role="menuitemcheckbox"] span:contains("${countryName}")`;
        cy.get(countryCheckboxSelector).click();
    }

    getResetFiltersButton() {
        return cy.contains('.c-ewUecD', 'Reset filters');
    }

    verifyFilteringAndReset(country: string) {
        this.getCoverageTableNumberTypesTab()
            .find('button')
            .then(($buttonsBefore) => {
                const initialCount = $buttonsBefore.length;

                this.selectCountryFromDropdown(country);
                this.clickNumberTypesButton();

                this.getCoverageTableNumberTypesTab()
                    .find('button')
                    .should('have.length', 1);

                this.getResetFiltersButton().click({force: true});

                this.getCoverageTableNumberTypesTab()
                    .find('button')
                    .should('have.length', initialCount);
            });
    }
}