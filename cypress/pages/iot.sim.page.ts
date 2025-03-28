import BasePage from "./base.page";

export default class IotSimPage extends BasePage {
    constructor() {
        super('iotSim');
    }

    get LanguageButton() {
        return cy.get('button[role="combobox"][data-state="closed"]');
    }

    selectLanguage(languageText: string) {
        cy.contains(languageText)
          .click();
    }

    checkPageTitle(expectedTitle: string) {
        cy.title().should('eq', expectedTitle);
    }

    checkH1Text(expectedText: string) {
        cy.get('h1').should('contain.text', expectedText);
    }

    checkLanguageButton(expectedText: string) {
        this.LanguageButton.should('contain.text', expectedText);
    }

    checkJapanese() {
        this.LanguageButton.click({force: true});
        this.selectLanguage('日本語 (Japanese)');
        this.checkPageTitle('Telnyxの高品質IoT SIMカードでグローバルな接続を体験してください');
        this.checkH1Text('IoT SIMカード');
        this.checkLanguageButton('日本語 (Japanese)');
        cy.url().should('include', 'iot-sim-japan');
    }    

    checkKorean() {
        this.LanguageButton.click({force: true});
        this.selectLanguage('한국인 (Korean)');
        this.checkPageTitle('글로벌 연결을 위한 IoT SIM 카드 | Telnyx');
        this.checkH1Text('IoT SIM 카드');
        this.checkLanguageButton('한국인 (Korean)');
        cy.url().should('include', 'iot-sim-korea');
    }   

    checkEnglish() {
        this.checkLanguageButton('English');
        this.LanguageButton.invoke('text').then((buttonText) => {
            if (buttonText !== 'English') {
                this.LanguageButton.click({ force: true });
                this.selectLanguage('English');
            }
            this.checkPageTitle('The best global IoT SIM Card for multi-network connectivity');
            this.checkH1Text('IoT SIM Card');
            cy.url().should('include', 'iot-sim-card');
        });
    }       
}