import HomePage from "../pages/home.page";

it('Validation of settings persistence for AI-powered demo', () => {
    const homepage = new HomePage();

    homepage.open();
    homepage.clickAdvancedSettingsButton();
    homepage.switchModel('meta-llama/Meta-Llama-3.1-70B-Instruct', 'google/gemma-7b-it');
    homepage.clickConfirmButton();
    homepage.clickAdvancedSettingsButton();
    homepage.getModelButton('google/gemma-7b-it ')
        .should('be.visible');
})