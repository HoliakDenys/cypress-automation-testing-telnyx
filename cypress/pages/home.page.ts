import BasePage from "./base.page";

export default class HomePage extends BasePage {
    constructor() {
        super('homepage');
    }

    getAdvancedSettingsButton() {
        return cy.get('.c-eMQMVZ').find('button').first();
    }

    getModelDropdownButton() {
        return cy.get('.c-lgwftA');
    }

    getLinkedInLink() {
        return cy.get('.c-tKuzq').eq(0);
    }

    getTwitterLink() {
        return cy.get('.c-tKuzq').eq(1);
    }

    getFacebookLink() {
        return cy.get('.c-tKuzq').eq(2);
    }

    getConfirmButton() {
        return cy.get('button.c-ltigS').contains('Confirm');
    }

    clickAdvancedSettingsButton(): void {
        this.getAdvancedSettingsButton().click();
    }

    selectModel(modelName: string): void {
        this.getModelDropdownButton().click({force: true});
        cy.get(`div[aria-label="${modelName}"]`).click();
    }

    clickConfirmButton(): void {
        this.getConfirmButton().click();
    }

    checkSocialLink(platformName: string) {
        cy.fixture('socialLinks').then((socialLinks) => {
            const url = socialLinks[platformName];
            cy.request(url).its('status').should('eq', 200);
    
            let socialLink;
            switch (platformName.toLowerCase()) {
                case 'linkedin':
                    socialLink = this.getLinkedInLink();
                    break;
                case 'facebook':
                    socialLink = this.getFacebookLink();
                    break;
                case 'twitter':
                    socialLink = this.getTwitterLink();
                default:
                    return;
            }
    
            socialLink
                .should('have.attr', 'href', url)
                .invoke('removeAttr', 'target');
            socialLink.click();
    
            cy.origin(url, { args: { platformName, url } }, ({ platformName }) => {
                cy.url().should('include', platformName.toLowerCase());
            });
        });
    }
    
    clickFooterLinkByText(linkText: string) {
        cy.get('a.c-fZcwcz')
            .contains(linkText)
            .click({force: true});
    }

    verifyUrlContains(text: string) {
        cy.url().should('include', text);
        cy.go('back');
    }
}
