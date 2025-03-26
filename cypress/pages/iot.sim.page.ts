import BasePage from "./base.page";

export default class IotSimPage extends BasePage {
    constructor() {
        super('iotSim');
    }

    getLanguageButton() {
        return cy.get('.c-gACVrx');
    }

    selectLanguage(languageText: string) {
        cy.get('.c-jTfJrd')
          .contains(languageText)
          .click();
    }

    checkPageTitle(expectedTitle: string) {
        cy.title().should('eq', expectedTitle);
    }

    checkH1Text(expectedText: string) {
        cy.get('h1.c-eZpJHu').should('contain.text', expectedText);
    }

    checkLanguageButton(expectedText: string) {
        this.getLanguageButton().should('contain.text', expectedText);
    }

    checkJapanese() {
        this.getLanguageButton().click({force: true});
        this.selectLanguage('日本語 (Japanese)');
        this.checkPageTitle('Telnyxの高品質IoT SIMカードでグローバルな接続を体験してください');
        this.checkH1Text('IoT SIMカード');
        this.checkLanguageButton('日本語 (Japanese)');
        cy.url().should('include', 'iot-sim-japan');
    }

    checkKorean() {
        this.getLanguageButton().click({force: true});
        this.selectLanguage('한국인 (Korean)');
        this.checkPageTitle('글로벌 연결을 위한 IoT SIM 카드 | Telnyx');
        this.checkH1Text('IoT SIM 카드');
        this.checkLanguageButton('한국인 (Korean)');
        cy.url().should('include', 'iot-sim-korea');
    }

    checkEnglish() {
        this.getLanguageButton().click({force: true});
        this.selectLanguage('English');
        this.checkPageTitle('The best global IoT SIM Card for multi-network connectivity');
        this.checkH1Text('IoT SIM Card');
        this.checkLanguageButton('English');
        cy.url().should('include', 'iot-sim-card');
    }
}