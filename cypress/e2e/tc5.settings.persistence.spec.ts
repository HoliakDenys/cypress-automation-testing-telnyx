import HomePage from "../pages/home.page";

it('Validation of settings persistence for AI-powered demo', () => {
    const homepage = new HomePage();

    homepage.open();
    homepage.clickAdvancedSettingsButton();
    homepage.selectModel('google/gemma-7b-it');
    homepage.clickConfirmButton();
    homepage.clickAdvancedSettingsButton();
    homepage.getModelDropdownButton()
        .should('be.visible')
        .should('have.text', 'google/gemma-7b-it ');
})